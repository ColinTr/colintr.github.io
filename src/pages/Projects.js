import React from 'react';
import Swal from "sweetalert2";
import { useNav } from '../customHooks/useNav';
import './Page.css';

import {Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";
import 'font-awesome/css/font-awesome.css'
import {FaRegFilePdf} from "react-icons/fa";

const Projects = () => {
    const projectsRef = useNav('Projects');

    function mario_swal_video_popup() {
        Swal.fire({
            title: ' ',
            html:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/-SCnSPH7mK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            width: 620,
            showCloseButton: true,
            showConfirmButton: false,
        })
    }

    function robot_hand_swal_video_popup() {
        Swal.fire({
            title: ' ',
            html:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/cz-6uy60Rsc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>',
            width: 620,
            showCloseButton: true,
            showConfirmButton: false,
        })
    }

    return (
        <section ref={projectsRef} id='projectsContainer'>
            <Row>
                <Col className="col-12 col-lg-3">
                    <h1>Projects</h1>
                </Col>
                <Col className="col-12 col-lg-9">
                    <Row>
                        <Col className="col-sm-8 col-12 my-3">
                            <h3>Active learning for deep neural nets</h3>
                            <p align="justify">
                                Comparison of 3 active learning selection criteria: Random sampling, Uncertainty sampling and Diverse Mini Batch sampling on the two deep neural networks VGGNet16 and LeNet and on the two databases MNIST and CIFAR10.
                            </p>
                            <Row>
                                <Col className="col-9">
                                    <a id="custom_button" className="btn btn-outline-primary my-2 mx-1 btn-sm" rel="noreferrer" target="_blank" href="/assets/reports/TROISEMAINE_BOUCHARD_INACIO_Rapport_Projet_de_Session_IFT780.pdf">
                                        <FaRegFilePdf/> Report
                                    </a>
                                    <a id="custom_button" className="btn btn-outline-primary my-2 mx-1 btn-sm" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/Projet_de_session_reseaux_neuronaux">
                                        <FontAwesomeIcon icon={faGithub}/> Code
                                    </a>
                                </Col>
                                <Col className="col-3 d-flex align-items-center justify-content-end">
                                    <p id="education_p_2" className="my-1">Apr. 2021</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-sm-4 col-12 my-3">
                            <center>
                                <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/Projet_de_session_reseaux_neuronaux'>
                                    <img src="/assets/projet_reseaux_neuronaux_illustration.webp" width="170" alt="project 1 illustration" id="grow_div"/>
                                </a>
                            </center>
                        </Col>
                    </Row>
                    <center><hr style={{width: '90%'}}/></center>
                    <Row>
                        <Col className="col-sm-8 col-12 my-3">
                            <h3>Comparison of 6 classification methods</h3>
                            <p align="justify">
                                Comparison of 6 common classification methods and review of the good practices of machine learning.
                            </p>
                            <Row>
                                <Col className="col-9">
                                    <a id="custom_button" className="btn btn-outline-primary my-2 mx-1 btn-sm" rel="noreferrer" target="_blank" href="/assets/reports/Rapport_projet_de_session_TROISEMAINE_LEVIEUX.pdf">
                                        <FaRegFilePdf/> Report
                                    </a>
                                    <a id="custom_button" className="btn btn-outline-primary my-2 mx-1 btn-sm" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/Projet_de_session_techniques_apprentissage">
                                        <FontAwesomeIcon icon={faGithub}/> Code
                                    </a>
                                </Col>
                                <Col className="col-3 d-flex align-items-center justify-content-end">
                                    <p id="education_p_2" className="my-1">Dec. 2020</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-sm-4 col-12 my-3">
                            <center>
                                <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/Projet_de_session_techniques_apprentissage'>
                                    <img src="/assets/illustration_projet_comparaison.webp" width="170" alt="project 2 illustration" id="grow_div"/>
                                </a>
                            </center>
                        </Col>
                    </Row>
                    <center><hr style={{width: '90%'}}/></center>
                    <Row>
                        <Col className="col-sm-8 col-12 my-3">
                            <h3>Playable C++ Mario level editor</h3>
                            <p align="justify">
                                This is a playable level editor in the style of Super Mario Bros Nes. The user can design large levels before playing or even sharing them. It was developed using the C++ API <a rel="noreferrer" target="_blank" href="https://www.qt.io/" style={{color: '#33b38d'}}>QT</a>, while adhering to the <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" style={{color: '#33b38d'}}>Model–view–controller</a> design patern.
                            </p>
                            <Row>
                                <Col className="col-9">
                                    <button id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm" onClick={() => window.open("/mario/Mario.html", "_blank")}>
                                        <img src="/assets/mario-small-jump.webp" alt="Jumping mario" title="Play Mario" style={{'width': '14px'}}/> Play it live!
                                    </button>
                                    <button id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm" onClick={mario_swal_video_popup}><FontAwesomeIcon icon={faYoutube}/> Demo</button>
                                    <a id="custom_button" className="btn btn-outline-primary my-2 mx-1 btn-sm" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/MarioQT">
                                        <FontAwesomeIcon icon={faGithub}/> Code
                                    </a>
                                </Col>
                                <Col className="col-3 d-flex align-items-center justify-content-end">
                                    <p id="education_p_2" className="my-1">Jul. 2020</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-sm-4 col-12 my-3">
                            <center>
                                <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/MarioQT'>
                                    <img src="/assets/mario_qt.png" width="170" alt="project 3 illustration" id="grow_div"/>
                                </a>
                            </center>
                        </Col>
                    </Row>
                    <center><hr style={{width: '90%'}}/></center>
                    <Row>
                        <Col className="col-sm-8 col-12 my-3">
                            <h3>3D printed hand with Bluetooth control</h3>
                            <p align="justify">
                                Conception on <a rel="noreferrer" target="_blank" href="http://www.3ds.com/products/catia/" style={{color: '#33b38d'}}>Catia</a> and realization by 3D printing and laser cutting. Independent control of each finger using servomotors and instructions sent over Bluetooth with a custom android application.
                            </p>
                            <Row>
                                <Col className="col-9">
                                    <button id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm" onClick={robot_hand_swal_video_popup}><FontAwesomeIcon icon={faYoutube}/> Demo</button>
                                    <a id="custom_button" className="btn btn-outline-primary my-2 mx-1 btn-sm" rel="noreferrer" target="_blank" href="/assets/reports/Rapport_Projet_S4_Troisemaine_Levieux.pdf">
                                        <FaRegFilePdf/> Report
                                    </a>
                                    <a id="custom_button" className="btn btn-outline-primary my-2 mx-1 btn-sm" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/RobotHand">
                                        <FontAwesomeIcon icon={faGithub}/> Code
                                    </a>
                                </Col>
                                <Col className="col-3 d-flex align-items-center justify-content-end">
                                    <p id="education_p_2" className="my-1">Apr. 2018</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-sm-4 col-12 my-3">
                            <center>
                                <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/RobotHand'>
                                    <img src="/assets/illustration_main_robot.webp" width="170" alt="project 4 illustration" id="grow_div"/>
                                </a>
                                {/*<button id="iframe_button" onClick={robot_hand_swal_video_popup}>*/}
                                {/*    <iframe id="iframe_icon" width="170" src="https://www.youtube.com/embed/cz-6uy60Rsc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>*/}
                                {/*</button>*/}
                            </center>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default Projects;