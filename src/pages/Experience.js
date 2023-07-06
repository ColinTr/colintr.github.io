import React from 'react';
import { useNav } from '../customHooks/useNav';
import { Col, Container, Row } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import { FaRegFilePdf } from "react-icons/fa";

const Experience = () => {
    const experienceRef = useNav('Experience');

    return (
        <section ref={experienceRef} id='experienceContainer'>
            <Container>
                <Row>
                    <Col className="col-12 col-lg-4">
                        <h1>Experience</h1>
                    </Col>

                    <Col className="col-12 col-lg-8">
                        <Row className="my-3">
                            <Col className="flex flex-grow-0">
                                <a rel="noreferrer" target="_blank" href="https://lelab.orange.fr/locations/1">
                                    <img src="/assets/logo_orange.png" alt="Orange logo" style={{'width': '50px'}}/>
                                </a>
                            </Col>
                            <Col className="align-content-start flex flex-grow-1">
                                <Row>
                                    <h5 style={{padding: 0}}>PhD in data science</h5>
                                </Row>
                                <Row>
                                    <div className="p-0"><i>October 2021 to October 2024 (ongoing)</i> at Orange Labs, Lannion, France</div>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign: "justify"}}>
                                When a customer's fiber optic Internet network experiences a malfunction, variables describing the network are fed back to Orange.
                                A rule-based application maintained by network experts is currently used to diagnose failures.
                                But a significant proportion of faults remain undiagnosed.
                                The aim here is to uncover the missing diagnostics from this heterogeneous set of tabular data with a purely <i>machine learning</i> approach.
                            </Col>
                        </Row>

                        <center><hr style={{width: '90%'}}/></center>

                        <Row className="my-3">
                            <Col className="flex flex-grow-0">
                                <a rel="noreferrer" target="_blank" href="https://lelab.orange.fr/locations/1">
                                    <img src="/assets/logo_orange.png" alt="Orange logo" style={{'width': '50px'}}/>
                                </a>
                            </Col>
                            <Col className="align-content-start flex flex-grow-1">
                                <Row>
                                    <h5 style={{padding: 0}}>End-of-studies internship</h5>
                                </Row>
                                <Row>
                                    <div className="p-0"><i>April to September 2021</i> at Orange Labs, Lannion, France</div>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign: "justify"}}>
                                Improving the performance of state-of-the-art regressors by using random forest frameworks and/or XGBoost or an SNB.
                                Drafting of a report in the form of a scientific publication with a positioning in the state of the art and an analysis of the results.
                            </Col>
                        </Row>
                        <Row className="flex">
                            <div className="p-2">
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/Rapport_Stage_Orange___Colin_Troisemaine.pdf">
                                    <span style={{marginRight:"3px"}}><FaRegFilePdf/></span>
                                    <span>Report</span>
                                </a>
                            </div>
                        </Row>

                        <center><hr style={{width: '90%'}}/></center>

                        <Row className="my-3">
                            <Col className="flex flex-grow-0">
                                <a rel="noreferrer" target="_blank" href="https://worldline.com/">
                                    <img src="/assets/logo_worldline.jpg" alt="Worldline Global logo" style={{'width': '50px'}}/>
                                </a>
                            </Col>
                            <Col className="align-content-start flex flex-grow-1">
                                <Row>
                                    <h5 style={{padding: 0}}>Internship in IT</h5>
                                </Row>
                                <Row>
                                    <div className="p-0"><i>June to August 2020</i> at Worldline Global, Tours, France</div>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign: "justify"}}>
                                Implementation of a more easily interpretable log generation system to simplify troubleshooting, followed by the <i>Dockerization</i> of an application and the drafting of integration tests for the same project.
                            </Col>
                        </Row>
                        <Row className="flex">
                            <div className="p-2">
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/Rapport_201920_DI4_TROISEMAINE_Colin.pdf">
                                    <span style={{marginRight:"3px"}}><FaRegFilePdf/></span>
                                    <span>Report</span>
                                </a>
                            </div>
                        </Row>

                        <center><hr style={{width: '90%'}}/></center>

                        <Row className="my-3 align-items-center">
                            <Col className="flex flex-grow-0">
                                <a rel="noreferrer" target="_blank" href="https://www.ganil-spiral2.eu/">
                                    <img src="/assets/logo_ganil.png" alt="GANIL logo" style={{'width': '50px'}}/>
                                </a>
                            </Col>
                            <Col className="align-content-start flex flex-grow-1">
                                <Row>
                                    <h5 style={{padding: 0}}>Internship in IT</h5>
                                </Row>
                                <Row>
                                    <div className="p-0"><i>May to June 2017</i> at GANIL, Caen, France</div>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign: "justify"}}>
                                Discovery of the management of a computer park in a large company.
                            </Col>
                        </Row>
                        <Row className="flex">
                            <div className="p-2">
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/Rapport_de_stage_ganil.pdf">
                                    <span style={{marginRight:"3px"}}><FaRegFilePdf/></span>
                                    <span>Report</span>
                                </a>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;