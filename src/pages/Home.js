import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

import 'font-awesome/css/font-awesome.min.css';
import '../academicons/css/academicons.min.css';


const Home = () => {
    const homeRef = useNav('Home');

    return (
        <section ref={homeRef} id='homeContainer'>
            <Container>
                <Row>
                    <Col className="text-center col-12 col-lg-4">
                        <center>
                            <Row>
                                <Col>
                                    <img src='/assets/profil_rond.jpg' alt="profil" style={{'width': '250px'}}/>
                                </Col>
                            </Row>
                            <Row className="pt-3">
                                <Col>
                                    <span style={{color:'rgba(0,0,0)', fontSize: '35px'}}>Colin Troisemaine</span>
                                </Col>
                            </Row>
                            <Row className="pt-3">
                                <Col>
                                    <span style={{color:'rgba(0,0,0,.54)', fontSize: '20px'}}>PhD Student in data science</span>
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
                            <Row className="pt-3 pb-4 container-fluid justify-content-center">
                                <div className="col-2 d-flex col-sm-2 justify-content-end">
                                    <a rel="noreferrer" target="_blank" href='https://scholar.google.com/citations?user=bs3E-o4AAAAJ'>
                                        <i className="ai ai-google-scholar-square fa-2x" style={{color: '#33b38d'}} title="Google Scholar"/>
                                    </a>
                                </div>
                                <div className="col-2 d-flex col-sm-2 justify-content-center">
                                    <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr'>
                                        <svg fill="#33b38d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="32" height="32" style={{color: '#33b38d'}}>
                                            <title>GitHub</title>
                                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="col-2 d-flex col-sm-2 justify-content-center">
                                    <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/colin-troisemaine/'>
                                        <svg fill="#33b38d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32">
                                            <title>Linkedin</title>
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="col-2 d-flex col-sm-2 justify-content-center">
                                    <a rel="noreferrer" target="_blank" href='https://orcid.org/0000-0003-2211-1767'>
                                        <img src={"/ORCID_iD.svg"} title="ORCID" alt="logo orcid" width="32" height="32"/>
                                    </a>
                                </div>
                                <div className="col-2 d-flex col-sm-2 justify-content-center">
                                    <a rel="noreferrer" target="_blank" href='https://hal.archives-ouvertes.fr/search/index/q/*/authIdHal_s/colin-troisemaine'>
                                        <img src={"/logo-hal.svg"} alt="logo HAL" title="HAL Archives Ouvertes" width="32" height="32"/>
                                    </a>
                                </div>
                            </Row>
                        </center>
                    </Col>
                    <Col className="col-12 col-lg-8">
                        <Row>
                            <Col>
                                <h1 id="h1_home">About me</h1>
                                <p align="justify" id="about_section">
                                    I'm Colin Troisemaine, a PhD student in data science with a computer science engineering degree. Currently, I work at the R&D center of Orange in Lannion, under the supervision of the doctoral school IMT Atlantique.
                                    I study the discovery of new faults and diagnostics in the optical fiber network of customers.
                                    I am particularly interested in the area of <i>Novel Class Discovery</i>, which itself lies at the intersection of several other lines of research (such as <i>Transfer Learning</i>, <i>Open-World Learning</i> or <i>Semi-Supervised Learning</i>).
                                    In my spare time, I play the guitar and explore new technologies such as 3D printing and FPV drone flight.
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
                                        <a rel="noreferrer" target="_blank" href="https://www.imt-atlantique.fr/fr">
                                            <img src="/assets/logo_IMT_Atlantique.png" alt="IMT Atlantique logo" style={{'width': '54px'}}/>
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
                                            <img src="/assets/logo_sherbrooke_university.png" alt="Sherbrooke University logo" style={{'width': '54px'}}/>
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
                                            <img src="/assets/logo_polytech_tours.png" alt="Polytech Tours logo" style={{'width': '54px'}}/>
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
    );
};

export default Home;