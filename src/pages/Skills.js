import React from 'react';
import { Fragment } from 'react'
import { useNav } from '../customHooks/useNav';
import './Page.css';

import { faCode, faLanguage, faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap";

const programming = (
    <Fragment>
        <FontAwesomeIcon icon={faCode} size="4x" style={{color: '#33b38d'}}/>
        <h3 id='h3_skills' className="pt-2">Programming</h3>
        <p id='p_skills'><strong>Python</strong>, JavaScript, C++, git, SQL</p>
    </Fragment>
);

const data_science = (
    <Fragment>
        <FontAwesomeIcon icon={faBrain} size="4x" style={{color: '#33b38d'}}/>
        <h3 id='h3_skills' className="pt-2">Data Science</h3>
        <p id='p_skills'><strong>(Un)Supervised Learning</strong>, Artificial Neural Networks, Statistical Analysis</p>
    </Fragment>
);

const language = (
    <Fragment>
        <FontAwesomeIcon icon={faLanguage} size="4x" style={{color: '#33b38d'}}/>
        <h3 id='h3_skills' className="pt-2">Languages</h3>
        <p id='p_skills'><strong>French, English</strong></p>
    </Fragment>
);

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
                <div className="row">
                    <div className="col-sm-4 order-md-last py-3">
                        <span className="d-md-inline d-none">{language}</span>
                        <span className="d-md-none d-inline">{programming}</span>
                    </div>
                    <div className="col-sm-4 order-1 py-3">
                        <span className="d-md-inline d-none">{data_science}</span>
                        <span className="d-md-none d-inline">{language}</span>
                    </div>
                    <div className="col-sm-4 py-3">
                        <span className="d-md-inline d-none">{programming}</span>
                        <span className="d-md-none d-inline">{data_science}</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;