import React from 'react';
import { useNav } from '../customHooks/useNav';
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import {FaRegFilePdf} from "react-icons/fa";

const Experience = () => {
    const experienceRef = useNav('Experience');

    return (
        <section ref={experienceRef} id='experienceContainer'>
            <Row>
                <Col className="col-12 col-lg-3">
                    <h1>Experience</h1>
                </Col>

                <Col className="col-12 col-lg-9">
                    <Row className="my-3">
                        <Col className="flex flex-grow-0">
                            <a rel="noreferrer" target="_blank" href="https://lelab.orange.fr/locations/1">
                                <img src="/assets/logos/logo_orange.svg" alt="Orange logo" title="Orange Labs" id="grow_div" style={{'width': '50px'}}/>
                            </a>
                        </Col>
                        <Col className="align-content-start flex flex-grow-1">
                            <Row>
                                <h5 style={{padding: 0}}>PhD in data science</h5>
                            </Row>
                            <Row>
                                <div className="p-0"><i>October 2021 to September 2024</i> at Orange Labs, Lannion, France</div>
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
                    <Row className="pt-2">
                        <Col style={{textAlign: "justify"}} className="flex-grow-1">
                            <ul style={{marginBottom: 0}}>
                                <li>Developed 4 original techniques to discover novel classes in an unlabeled set of tabular data.</li>
                                <li>Presented complex concepts to diverse audiences through accessible presentations at conferences.</li>
                                <li>Realized an extensive state of the art on novel class discovery techniques, which received 10 citations in one year.</li>
                                <li>Collected and curated a dataset of 500,000 real internet access faults and engineered 700 new features.</li>
                            </ul>
                        </Col>
                        <Col sm={{ span: 12 }} md={{ span: "auto" }} className="d-flex align-items-center justify-content-center pt-2">
                            <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=nmwTBJ_7QLo">
                                <img id="grow_div" src="/assets/thesis_thumbnail.png" alt="Thesis defense video" style={{width: "100%", height: "auto", maxWidth: "300px"}}/>
                            </a>
                        </Col>
                    </Row>
                    <Row className="flex">
                        <div className="p-2">
                            {/**
                             <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=nmwTBJ_7QLo">
                                 <span style={{marginRight:"3px"}}><FaYoutube/></span>
                                 <span>Video</span>
                             </a>
                             **/}
                            <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/reports/2024IMTA0422_Troisemaine-Colin.pdf">
                                <span style={{marginRight:"3px"}}><FaRegFilePdf/></span>
                                <span>Thesis</span>
                            </a>
                        </div>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3">
                        <Col className="flex flex-grow-0">
                            <a rel="noreferrer" target="_blank" href="https://lelab.orange.fr/locations/1">
                                <img src="/assets/logos/logo_orange.svg" alt="Orange logo" title="Orange Labs" id="grow_div" style={{'width': '50px'}}/>
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
                            Historically, classification problems have received more attention than regression problems due to their prevalence in real-world scenarios.
                            The aim of this internship was to take advantage of the performance of state-of-the-art classification models such as Random Forest and XGBoost to create descriptive variables that will improve the performance of regression models.
                            <br/>
                            <br/>
                            <ul style={{marginBottom: 0}}>
                                <li>Designed a new way to create descriptive features to improve regression performance.</li>
                                <li>Developed a parametric framework that can make use of 4 different classification models to generate features to improve the performance of 5 regression models.</li>
                                <li>Published an analysis of the results along a positioning to the SOTA in a 12-page conference paper.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="flex">
                        <div className="p-2">
                            <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/reports/Rapport_Stage_Orange___Colin_Troisemaine.pdf">
                                <span style={{marginRight:"3px"}}><FaRegFilePdf/></span>
                                <span>Report</span>
                            </a>
                        </div>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3">
                        <Col className="flex flex-grow-0">
                            <a rel="noreferrer" target="_blank" href="https://worldline.com/">
                                <img src="/assets/logos/logo_worldline.webp" alt="Worldline Global logo" title="Worldline Global" id="grow_div" style={{'width': '50px'}}/>
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
                            In the event of a production incident, it is vital to understand the information transmitted to transaction receivers.
                            The existing system centralised log storage and faced challenges in tracing errors back to the source transaction.
                            In addition, the proprietary object type used makes it difficult to interpret the content of the messages.
                            <br/>
                            <br/>
                            <ul style={{marginBottom: 0}}>
                                <li>Developed an interpretable log generation system to simplify troubleshooting.</li>
                                <li>Packaged an application in a Docker container and designed integration tests for the same project.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="flex">
                        <div className="p-2">
                            <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/reports/Rapport_201920_DI4_TROISEMAINE_Colin.pdf">
                                <span style={{marginRight:"3px"}}><FaRegFilePdf/></span>
                                <span>Report</span>
                            </a>
                        </div>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3 align-items-center">
                        <Col className="flex flex-grow-0">
                            <a rel="noreferrer" target="_blank" href="https://www.ganil-spiral2.eu/">
                                <img src="/assets/logos/ganil_logo.webp" alt="GANIL logo" title="GANIL" id="grow_div" style={{'width': '50px'}}/>
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
                            The GANIL (for <i>Grand Accélérateur National d'Ions Lourds</i>) is a particle accelerator located in Normandy.
                            It is home to many researchers, whose computers and complex equipment require constant maintenance to ensure optimal functionality.
                            <br/>
                            <br/>
                            <ul style={{marginBottom: 0}}>
                                <li>Discovered the management of a computer park in a large company.</li>
                                <li>Configured, deployed and troubleshooted users' computers.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="flex">
                        <div className="p-2">
                            <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/reports/Rapport_de_stage_ganil.pdf">
                                <span style={{marginRight:"3px"}}><FaRegFilePdf/></span>
                                <span>Report</span>
                            </a>
                        </div>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default Experience;