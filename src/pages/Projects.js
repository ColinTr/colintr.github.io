import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    const projectsRef = useNav('Projects');

    return (
        <section ref={projectsRef} id='projectsContainer'>
            <Container>
                <Row>
                    <Col className="col-xs-12 col-md-4">
                        <h1>Projects</h1>
                    </Col>
                    <Col className="col-xs-12 col-md-8">
                        <p>This is the projects section</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;