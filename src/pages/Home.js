import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

const Home = () => {
    const homeRef = useNav('Home');

    return (
        <section ref={homeRef} id='homeContainer'>
            <Container>
                <Row>
                    <Col className="text-center col-12 col-lg-4">
                        <Row><Col><img src='/assets/profil_rond.png' alt="profile" style={{'width': '200px'}}/></Col></Row>
                        <Row className="pt-3"><Col><span style={{color:'rgba(0,0,0)', fontSize: '35px'}}>Colin Troisemaine</span></Col></Row>
                        <Row className="pt-3"><Col><span style={{color:'rgba(0,0,0,.54)', fontSize: '20px'}}>Ph.D Student in computer science</span></Col></Row>
                        <Row className="pt-2"><Col><span style={{color:'rgba(0,0,0,.54)', fontSize: '20px'}}><a rel="noreferrer" target="_blank"  href='https://lelab.orange.fr/locations/1'>Orange Labs</a>, France, Lannion</span></Col></Row>
                        <Row className="pt-2"><Col><span style={{color:'rgba(0,0,0,.54)', fontSize: '20px'}}><a rel="noreferrer" target="_blank"  href='https://imt-atlantique.fr/'>IMT Atlantique</a>, France, Brest</span></Col></Row>
                        <Row className="pt-3 container-fluid justify-content-center">
                            <Col className="d-flex justify-content-center col-sm-2">
                                <a rel="noreferrer" target="_blank" href='https://scholar.google.com/citations?user=bs3E-o4AAAAJ'><img src='/assets/google_scholar_logo.png' alt="google scholar" style={{'width': '32px'}}/></a>
                            </Col>
                            <Col className="d-flex justify-content-center col-sm-2">
                                <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr'><img src='/assets/github_logo.png' alt="github" style={{'width': '32px'}}/></a>
                            </Col>
                            <Col className="d-flex justify-content-center col-sm-2">
                                <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/colin-troisemaine/'><img src='/assets/linkedin_logo.png' alt="github" style={{'width': '32px'}}/></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-12 col-lg-8">
                        <Row>
                            <Col>
                                <h1>About me</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Interests
                            </Col>
                            <Col>
                                Education
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;
