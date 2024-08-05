import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import { faCode, faLanguage, faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from "react-bootstrap";

const Skills = () => {
    const skillsRef = useNav('Skills');

    return (
        <section ref={skillsRef} id='skillsContainer' className="text-center">
            <Row>
                <Col className="pb-3">
                    <h1>Skills</h1>
                </Col>
            </Row>

            <Row>
                <Col className="col-sm-4 order-sm-0 col-12 align-items-center">
                    <FontAwesomeIcon icon={faCode} size="4x" style={{color: '#33b38d'}}/>
                    <h3 id='h3_skills' className="pt-2">Programming</h3>
                </Col>
                <Col className="col-sm-4 order-sm-5 col-12 align-items-center">
                    <p id='p_skills' style={{textAlign: "center"}}>
                        <strong><a rel="noreferrer" target="_blank" href="https://www.python.org/" id='skill_link'>Python</a></strong>, <strong><a rel="noreferrer" target="_blank" href="https://pandas.pydata.org/" id='skill_link'>Pandas</a></strong>, <a rel="noreferrer" target="_blank" href="https://fr.wikipedia.org/wiki/Structured_Query_Language" id='skill_link'>SQL</a> (<a rel="noreferrer" target="_blank" href="https://www.postgresql.org/" id='skill_link'>Postgres</a>, <a rel="noreferrer" target="_blank" href="https://cloud.google.com/bigquery" id='skill_link'>Bigquery</a>), <a rel="noreferrer" target="_blank" href="https://developer.mozilla.org/fr/JavaScript" id='skill_link'>JavaScript</a>, <a rel="noreferrer" target="_blank" href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language" id='skill_link'>HTML</a>/<a rel="noreferrer" target="_blank" href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade" id='skill_link'>CSS</a>, <a rel="noreferrer" target="_blank" href="https://www.latex-project.org/help/documentation/" id='skill_link'>LaTeX</a>, <a rel="noreferrer" target="_blank" href="https://pytorch.org/" id='skill_link'>PyTorch</a>, <a rel="noreferrer" target="_blank" href="https://numpy.org/" id='skill_link'>Numpy</a>, <a rel="noreferrer" target="_blank" href="https://scikit-learn.org/" id='skill_link'>Scikit-learn</a>, <a rel="noreferrer" target="_blank" href="https://jupyter.org/" id='skill_link'>Jupyter</a>, <a rel="noreferrer" target="_blank" href="https://matplotlib.org/" id='skill_link'>Matplotlib</a>, <a rel="noreferrer" target="_blank" href="https://wandb.ai/site" id='skill_link'>Weights&Biases</a>, <a rel="noreferrer" target="_blank" href="https://www.reactjs.com/" id='skill_link'>React</a>, <a rel="noreferrer" target="_blank" href="https://nodejs.org/" id='skill_link'>Node.js</a>, <a rel="noreferrer" target="_blank" href="https://expressjs.com/" id='skill_link'>Express.js</a>
                    </p>
                </Col>

                <Col className="col-sm-4 order-sm-1 col-12 padding_when_extra_small">
                    <FontAwesomeIcon icon={faBrain} size="4x" style={{color: '#33b38d'}}/>
                    <h3 id='h3_skills' className="pt-2">Data Science</h3>
                </Col>
                <Col className="col-sm-4 order-sm-5 col-12 align-items-center">
                    <p id='p_skills' style={{textAlign: "center"}}>
                        <strong>(Un)Supervised Learning</strong>,
                        Artificial Neural Networks,
                        Statistical Analysis,
                        Tabular Data
                    </p>
                </Col>

                <Col className="col-sm-4 order-sm-2 col-12 align-items-center padding_when_extra_small">
                    <FontAwesomeIcon icon={faLanguage} size="4x" style={{color: '#33b38d'}}/>
                    <h3 id='h3_skills' className="pt-2">Languages</h3>
                </Col>
                <Col className="col-sm-4 order-sm-5 col-12 align-items-center">
                    <p id='p_skills' style={{textAlign: "center"}}>
                        <strong>French, English</strong>
                    </p>
                </Col>
            </Row>

        </section>
    );
};

export default Skills;