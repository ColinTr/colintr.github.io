import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

import { faCode, faLanguage, faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
    const skillsRef = useNav('Skills');

    return (
        <section ref={skillsRef} id='skillsContainer'>
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1>Skills</h1>
                    </Col>
                </Row>
                <Row className="pt-3">
                    <Col>
                        <FontAwesomeIcon icon={faCode} size="4x"/>
                        <h3>Programming</h3>
                        <strong>Python, JavaScript, C++, git</strong>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faBrain} size="4x" />
                        <h3>Data Science</h3>
                        <strong>blabla</strong>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faLanguage} size="4x" />
                        <h3>Languages</h3>
                        <strong>French, English</strong>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;