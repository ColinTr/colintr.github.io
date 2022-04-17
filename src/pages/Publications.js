import Swal from "sweetalert2";
import React from 'react';
import { useNav } from '../customHooks/useNav';
import { Col, Container, Row } from "react-bootstrap";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

const Publications = () => {
    const publicationsRef = useNav('Publications');

    const article_1_citation =
        '@inproceedings{inproceedings\n' +
        '   author = {Troisemaine, Colin and Lemaire, Vincent},\n' +
        '   year = {2022},\n' +
        '   month = {01}, \n' +
        '   pages = {},\n' +
        '   title = {Construction de variables à l\'aide de classifieurs comme aide à la régression : une évaluation empirique}\n' +
        '}'

    function cite_article_1() {
        Swal.fire({
            title: '<strong>Cite</strong>',
            icon: '',
            html:
                '<pre id="citation_popup_div">' +
                    '<code>' + article_1_citation + '</code>' +
                '</pre>',
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Copy',
            confirmButtonColor: '#33b38d',
            showCancelButton: true,
            cancelButtonText: 'Close',
        }).then((result) => {
            if (result.isConfirmed) {
                navigator.clipboard.writeText(article_1_citation).then(function() {
                    Swal.fire('Citation copied!', '', 'success')
                }, function() {
                    Swal.fire('Unable to write text to the system clipboard.', '', 'error')
                });
            }
        })
    }

    return (
        <section ref={publicationsRef} id='publicationsContainer'>
            <Container>
                <Row>
                    <Col className="col-12 col-lg-4">
                        <h1>Publications</h1>
                    </Col>
                    <Col className="col-12 col-lg-8">
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
                            <button id="custom_button" onClick={cite_article_1} className="btn btn-outline-primary my-1 btn-sm js-cite-modal">Cite</button>
                            <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/ClassificationForRegression"><FaGithub/> Code</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Publications;