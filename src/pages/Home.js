import {Col, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import { useNav } from '../customHooks/useNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Page.css';


const Home = () => {
    const homeRef = useNav('Home');

    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const openModal = () => { setIsModalOpen(true); };
    // const closeModal = () => { setIsModalOpen(false); };
    // function open_brain_model() {
    //     ReactGA.event({category: "Brain", action: "User hit brain button"});
    //     openModal()
    // }

    return (
        <div id='homeContainer'>
            {/*
            <div style={{padding:0}}>
                <BrainModal
                    isModalOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
            */}
            <section ref={homeRef}>
                <Row>
                    <Col className="col-lg-4 col-12">
                        <Row>
                            <Col className="col-12 col-lg-12 col-md-6 col-sm-6 text-center">
                                <img src="/assets/profil_rond_medium.webp" className="img-fluid" alt="Profile" style={{maxWidth: '100%', maxHeight: '220px'}}/>
                            </Col>
                            <Col className="col-12 col-lg-12 col-md-6 col-sm-6 text-center" style={{lineHeight: "1.1em"}}>
                                <Row className="pt-3">
                                    <span style={{color:'rgba(0,0,0)', fontSize: '35px'}}>Colin Troisemaine</span>
                                </Row>
                                <Row className="pt-3">
                                    <span style={{color:'rgba(0,0,0,.54)', fontSize: '20px'}}>PhD, Data Scientist</span>
                                </Row>
                                <Row className="pt-2">
                                    <span style={{fontSize: '20px', lineHeight: "1.3em"}}>
                                        <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/company/amiad-minarm' id="article_title">AMIAD - Agence Ministérielle pour l'IA de Défense, Rennes, France</a>
                                    </span>
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
                                            <img src="/assets/logos/cv-icon.png" alt="ORCID iD" title="ORCID iD" style={{'width': '32px'}}/>
                                        </a>
                                    </Col>
                                </Row>
                                {/*
                                    <Row>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-outline-primary my-1 p-1 btn-sm js-cite-modal" style={{display:"flex", alignItems:"center"}} title="3D brain model"
                                                    onClick={() => open_brain_model()}>
                                                <FontAwesomeIcon icon={faBrain} size="4x" style={{color: '#33b38d', 'width': '30px', 'height': '30px'}} className="py-0"/>
                                            </button>
                                        </div>
                                    </Row>
                                */}
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-lg-8 col-12">
                        <Row>
                            <h1 id="h1_home">About me</h1>
                            <p align="justify" id="about_section">
                                I am Colin Troisemaine, a PhD in Data Science with a degree in Computer Engineering.
                                I am currently working at AMIAD (Agence Ministérielle pour l'IA de Défense) in Rennes, where I engage with cutting-edge AI research and applications.
                                My current interests span Large Language Models, Open-World Learning, Transfer Learning, and Unsupervised Learning.
                                In my spare time, I love playing chess ♞ and guitar 🎸, and exploring technologies like 3D printing 🖨️ and FPV drone flying 🚁.
                            </p>
                        </Row>
                        <Row style={{lineHeight: "1.1em"}}>
                            <div className="col-md-4 pt-3">
                                <h3 id="h3_home">Interests</h3>
                                <ul style={{lineHeight: "1.1em"}}>
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
                                        <p id="education_p_2" className="my-1">Oct. 2021 - Sept. 2024</p>
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
            </section>
        </div>
    );
};

export default Home;