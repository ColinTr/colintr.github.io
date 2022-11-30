import Swal from "sweetalert2";
import React from 'react';
import { useNav } from '../customHooks/useNav';
import { Col, Container, Row } from "react-bootstrap";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

const Publications = () => {
    const publicationsRef = useNav('Publications');

    const article_3_citation =
        '@article{tr2022construction,\n' +
        '   title = {Découvrir de nouvelles classes dans des données tabulaires},\n' +
        '   author = {Troisemaine, Colin and Flocon-Cholet, Joachim and Gosselin, Stéphane and Vaton, Sandrine and Reiffers-Masson, Alexandre and Lemaire, Vincent},\n' +
        '   publisher = {arXiv},\n' +
        '   year = {2022},\n' +
        '   doi = {10.48550/ARXIV.2211.16352},\n' +
        '}'

    const article_2_citation =
        '@inproceedings{tabularncd,\n' +
        '   title = {A Method for Discovering Novel Classes in Tabular Data},\n' +
        '   author = {Troisemaine, Colin and Flocon-Cholet, Joachim and Gosselin, Stéphane and Vaton, Sandrine and Reiffers-Masson, Alexandre and Lemaire, Vincent},\n' +
        '   booktitle={IEEE International Conference on Knowledge Graph (ICKG)},\n' +
        '   year = {2022},\n' +
        '}'

    const article_1_citation =
        '@article{RNTI/papers/1002730,\n' +
        '   title = {Construction de variables à l\'aide de classifieurs comme aide à la régression : une évaluation empirique},\n' +
        '   author = {Colin Troisemaine and Vincent Lemaire},\n' +
        '   journal = {Revue des Nouvelles Technologies de l\'Information},\n' +
        '   volume = {Extraction et Gestion des Connaissances, RNTI-E-38},\n' +
        '   year = {2022},\n' +
        '   pages = {217-224}\n' +
        '}'

    function cite_article(citation) {
        Swal.fire({
            title: '<strong>Cite</strong>',
            icon: '',
            html:
                '<pre id="citation_popup_div">' +
                '<code>' + citation + '</code>' +
                '</pre>',
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Copy',
            confirmButtonColor: '#33b38d',
            showCancelButton: true,
            cancelButtonText: 'Close',
            width: '600px',
        }).then((result) => {
            if (result.isConfirmed) {
                navigator.clipboard.writeText(citation).then(function() {
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

                        <Row className="my-3">
                            <div>
                                <FontAwesomeIcon icon={faFileAlt}/>
                                <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://arxiv.org/abs/2211.16352">
                                    Découvrir de nouvelles classes dans des données tabulaires
                                </a>
                            </div>
                            <div className="pt-1">
                                <a id="article_metadata" rel="noreferrer" target="_blank" href="https://egc2023.sciencesconf.org/">
                                    French-speaking conference on Knowledge Extraction and Management (EGC 2023)
                                </a>
                            </div>
                            <div className="pt-1" style={{color:'rgba(0,0,0,.54)'}}>
                                <i>Translation of the article "A Method for Discovering Novel Classes in Tabular Data"</i>
                            </div>
                            <div className="pt-1">
                                <button id="custom_button" onClick={() => cite_article(article_3_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal">Cite</button>
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://arxiv.org/pdf/2211.16352"><FaRegFilePdf/> PDF</a>
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/TabularNCD"><FaGithub/> Code</a>
                            </div>
                        </Row>

                        <Row className="my-3">
                            <div>
                                <FontAwesomeIcon icon={faFileAlt}/>
                                <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://arxiv.org/abs/2209.01217">
                                    A Method for Discovering Novel Classes in Tabular Data
                                </a>
                            </div>
                            <div className="pt-1">
                                <a id="article_metadata" rel="noreferrer" target="_blank" href="https://ickg2022.zhonghuapu.com/">
                                    IEEE International Conference on Knowledge Graph (ICKG 2022)
                                </a>
                            </div>
                            <div className="pt-1">
                                <button id="custom_button" onClick={() => cite_article(article_2_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal">Cite</button>
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://arxiv.org/pdf/2209.01217"><FaRegFilePdf/> PDF</a>
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/TabularNCD"><FaGithub/> Code</a>
                            </div>
                        </Row>

                        <Row className="my-3">
                            <div>
                                <FontAwesomeIcon icon={faFileAlt}/>
                                <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://www.researchgate.net/publication/359210514_Construction_de_variables_a_l'aide_de_classifieurs_comme_aide_a_la_regression_une_evaluation_empirique">
                                    Construction de variables à l’aide de classifieurs comme aide à la régression: une évaluation empirique
                                </a>
                            </div>
                            <div className="pt-1">
                                <a id="article_metadata" rel="noreferrer" target="_blank" href="https://egc2022.univ-tours.fr/">
                                    French-speaking conference on Knowledge Extraction and Management (EGC 2022)
                                </a>
                            </div>
                            <div className="pt-1">
                                <button id="custom_button" onClick={() => cite_article(article_1_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal">Cite</button>
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://arxiv.org/pdf/2112.03703"><FaRegFilePdf/> PDF</a>
                                <a id="custom_button" className="btn btn-outline-primary my-1 mx-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/ClassificationForRegression"><FaGithub/> Code</a>
                            </div>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Publications;