import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBrain} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, Row} from "react-bootstrap";
import '../academicons/css/academicons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNav } from '../customHooks/useNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StlViewer} from "react-stl-viewer";
import React, {useState} from 'react';
import ReactGA from "react-ga4";

import BrainModal from './BrainModal'
import './Page.css';


const Home = () => {
    const homeRef = useNav('Home');

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modelLoadPercent, setModelLoadPercent] = useState(0)
    const [modalContent, setModalContent] = useState(<div/>)
    const openModal = () => { setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); };

    async function fetch_brain_with_progress_bar() {
        const response = await fetch('/assets/3d_brain_model.stl');
        const contentLength = response.headers.get('content-length');
        const total = parseInt(contentLength, 10);
        let loaded = 0;

        const res = new Response(new ReadableStream({
            async start(controller) {
                const reader = response.body.getReader();
                for (;;) {
                    const {done, value} = await reader.read();
                    if (done) break;
                    loaded += value.byteLength;
                    setModelLoadPercent(Math.round(loaded/total*100))
                    controller.enqueue(value);
                    // await new Promise(resolve => setTimeout(resolve, 100))
                }
                controller.close();
            },
        }));
        await res.blob();  // Returns the blob object
        setModalContent(<StlViewer style={{top: 0, left: 0, width: '100%', height: '100%'}} orbitControls shadows url={'/assets/3d_brain_model.stl'} modelProps={{rotationX: 0.6}}/>)
    }

    function open_brain_model() {
        ReactGA.event({category: "Brain", action: "User hit brain button"});
        fetch_brain_with_progress_bar().then()
        openModal()
    }

    return (
        <div>
            <div style={{padding:0}}>
                <BrainModal
                    isModalOpen={isModalOpen}
                    modalContent={modalContent}
                    modelLoadPercent={modelLoadPercent}
                    onClose={closeModal}
                />
            </div>
            <section ref={homeRef} id='homeContainer'>
                <Container>
                    <Row>
                        <Col className="text-center col-12 col-lg-4">
                            <center>
                                <Row>
                                    <Col>
                                        <img src="/assets/profil_rond_medium.webp" alt="Profile" style={{"maxWidth": "250px", width: "80vw"}} />
                                    </Col>
                                </Row>
                                <Row className="pt-3">
                                    <Col>
                                        <span style={{color:'rgba(0,0,0)', fontSize: '35px'}}>Colin Troisemaine</span>
                                    </Col>
                                </Row>
                                <Row className="pt-3">
                                    <Col>
                                        <span style={{color:'rgba(0,0,0,.54)', fontSize: '20px'}}>Research Engineer in Machine Learning</span>
                                    </Col>
                                </Row>
                                <Row className="pt-2">
                                    <Col>
                                        <span style={{fontSize: '20px'}}>
                                            <a rel="noreferrer" target="_blank" href='https://lelab.orange.fr/locations/1' id="article_title">Orange Labs, France, Lannion</a>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="pt-2">
                                    <Col>
                                        <span style={{fontSize: '20px'}}>
                                            <a rel="noreferrer" target="_blank" href='https://imt-atlantique.fr/' id="article_title">IMT Atlantique, France, Brest</a>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="pt-3 mb-2 container-fluid justify-content-center">
                                    <Col className="d-flex col-auto px-2 justify-content-center" id="grow_div">
                                        <a rel="noreferrer" target="_blank" href='https://scholar.google.com/citations?user=bs3E-o4AAAAJ' className="pb-0">
                                            <img src="/assets/logos/google_scholar_logo.svg" alt="Google Scholar" title="Google Scholar" style={{'width': '32px'}}/>
                                        </a>
                                    </Col>
                                    <Col className="d-flex col-auto px-2 justify-content-center" id="grow_div">
                                        <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr'>
                                            <img src="/assets/logos/github_logo.svg" alt="GitHub" title="GitHub" style={{'width': '32px'}}/>
                                        </a>
                                    </Col>
                                    <Col className="d-flex col-auto px-2 justify-content-center" id="grow_div">
                                        <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/colin-troisemaine/'>
                                            <img src="/assets/logos/linkedin_logo.svg" alt="LinkedIn" title="LinkedIn" style={{'width': '32px'}}/>
                                        </a>
                                    </Col>
                                    <Col className="d-flex col-auto px-2 justify-content-center" id="grow_div">
                                        <a rel="noreferrer" target="_blank" href='https://orcid.org/0000-0003-2211-1767'>
                                            <img src="/assets/logos/ORCID_iD.svg" alt="ORCID iD" title="ORCID iD" style={{'width': '32px'}}/>
                                        </a>
                                    </Col>
                                    <Col className="d-flex col-auto px-2 justify-content-center" id="grow_div">
                                        <a rel="noreferrer" target="_blank" href='https://hal.archives-ouvertes.fr/search/index/q/*/authIdHal_s/colin-troisemaine'>
                                            <img src="/assets/logos/logo-hal.svg" alt="HAL Archives Ouvertes" title="HAL Archives Ouvertes" width="32" height="32"/>
                                        </a>
                                    </Col>
                                    <Col className="d-flex col-auto px-2 justify-content-center" id="grow_div">
                                        <a rel="noreferrer" target="_blank" href='/assets/CV_Latex_Colin_Troisemaine_English.pdf'>
                                            <i className="ai ai-cv ai-2x" style={{color: "black"}} title="Curriculum Vitae"/>
                                        </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <button className="btn btn-outline-primary my-1 p-1 btn-sm js-cite-modal" style={{display:"flex", alignItems:"center"}} title="3D brain model"
                                                onClick={() => open_brain_model()}>
                                                <FontAwesomeIcon icon={faBrain} size="4x" style={{color: '#33b38d', 'width': '30px', 'height': '30px'}} className="py-0"/>
                                        </button>
                                    </Col>
                                </Row>
                            </center>
                        </Col>
                        <Col className="col-12 col-lg-8">
                            <Row>
                                <Col>
                                    <h1 id="h1_home">About me</h1>
                                    <p align="justify" id="about_section">
                                        I am Colin Troisemaine, a PhD student in Data Science with a degree in Computer Engineering.
                                        I am currently working at the Orange R&D center in Lannion, under the supervision of the IMT Atlantique doctoral school.
                                        My research focuses on finding new diagnoses for the faults that occur in optical fiber networks.
                                        I am particularly interested in the area of <i>Novel Class Discovery</i>, which is at the intersection of several other lines of research (such as <i>Transfer Learning</i>, <i>Open-World Learning</i> or <i>Semi-Supervised Learning</i>).
                                        In my spare time, I love playing chess ♞ and guitar 🎸, and exploring cool technologies like 3D printing 🖨️ and FPV drone flying 🚁.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <div className="col-md-4 pt-3">
                                    <h3 id="h3_home">Interests</h3>
                                    <ul>
                                        <li><p id="education_p" className="my-1 pt-2">Artificial Neural Networks</p></li>
                                        <li><p id="education_p" className="my-1 pt-2">Unsupervised Learning</p></li>
                                        <li><p id="education_p" className="my-1 pt-2">Novel Class Discovery</p></li>
                                    </ul>
                                </div>
                                <div className="col-md-8 pt-3">
                                    <h3 id="h3_home">Education</h3>
                                    <Row className="align-items-center">
                                        <Col className="flex flex-grow-0">
                                            <a rel="noreferrer" target="_blank" href="https://www.imt-atlantique.fr/">
                                                <img src="/assets/logos/logo_IMT_Atlantique.webp" alt="IMT Atlantique logo" id="grow_div" title="IMT Atlantique" style={{'width': '54px'}}/>
                                            </a>
                                        </Col>
                                        <Col className="flex flex-grow-1 px-0">
                                            <p id="education_p" className="my-1">PhD in Data Science</p>
                                            <p id="education_p_2" className="my-1">IMT Atlantique, Orange Labs</p>
                                            <p id="education_p_2" className="my-1">Oct. 2021 - Oct. 2024</p>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center">
                                        <Col className="flex flex-grow-0">
                                            <a rel="noreferrer" target="_blank" href="https://www.usherbrooke.ca/">
                                                <img src="/assets/logos/logo_sherbrooke_university.webp" alt="Sherbrooke University logo" id="grow_div" title="Sherbrooke University" style={{'width': '54px'}}/>
                                            </a>
                                        </Col>
                                        <Col className="flex flex-grow-1 px-0">
                                            <p id="education_p" className="my-1">Master's Degree in Computer Science</p>
                                            <p id="education_p_2" className="my-1">University of Sherbrooke, Quebec</p>
                                            <p id="education_p_2" className="my-1">Sep. 2020 - Aug. 2021</p>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center">
                                        <Col className="flex flex-grow-0">
                                            <a rel="noreferrer" target="_blank" href="https://polytech.univ-tours.fr/">
                                                <img src="/assets/logos/logo_polytech_tours.webp" alt="Polytech Tours logo" id="grow_div" title="Polytech Tours" style={{'width': '54px'}}/>
                                            </a>
                                        </Col>
                                        <Col className="flex flex-grow-1 px-0">
                                            <p id="education_p" className="my-1">Engineering Degree in Computer Science</p>
                                            <p id="education_p_2" className="my-1">Polytechnic school of the University of Tours, France</p>
                                            <p id="education_p_2" className="my-1">Sep. 2018 - Aug. 2021</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;