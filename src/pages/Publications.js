import Swal from "sweetalert2";
import React from 'react';
import { useNav } from '../customHooks/useNav';

import './Page.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";


const Publications = () => {
    const publicationsRef = useNav('Publications');

    function cite_article_1() {
        Swal.fire({
            title: '<strong>Cite</strong>',
            icon: '',
            html:
                '<div id="text-align-left">' +
                '<pre>' +
                    '<code className="tex hljs">' +
                        '@inproceedings{inproceedings <br>' +
                        '   author = {Troisemaine, Colin and Lemaire, Vincent}, <br>' +
                        '   year = {2022}, <br>' +
                        '   month = {01}, <br>' +
                        '   pages = {}, <br>' +
                        '   title = {Construction de variables à l\'aide de classifieurs comme aide à la régression : une évaluation empirique} <br>' +
                        '}' +
                    '</code>' +
                '</pre>' +
                '</div>',

            showCloseButton: true,
            showConfirmButton: false,
        })
    }

    return (
        <section ref={publicationsRef} id='publicationsContainer'>
            <Container>
                <Row>
                    <Col className="col-xs-12 col-md-4">
                        <h1>Publications</h1>
                    </Col>
                    <Col className="col-xs-12 col-md-8">
                        <div>
                            <FontAwesomeIcon icon={faFileAlt}/>
                            <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://www.researchgate.net/publication/359210514_Construction_de_variables_a_l'aide_de_classifieurs_comme_aide_a_la_regression_une_evaluation_empirique">
                                Construction de variables à l’aide de classifieurs comme aide à la régression: une évaluation empirique
                            </a>
                        </div>
                        <div className="pt-1">
                            <a id="article_metadata" rel="noreferrer" target="_blank" href="https://egc2022.univ-tours.fr/">French-speaking conference on Knowledge Extraction and Management</a>
                        </div>
                        <div className="pt-1">
                            <Button onClick={cite_article_1} className="btn btn-secondary p-1 m-1">Cite</Button>
                            <a className="btn btn-secondary p-1 m-1" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/ClassificationForRegression"><FaGithub/> Code</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Publications;