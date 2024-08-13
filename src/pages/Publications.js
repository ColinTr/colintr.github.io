import Swal from "sweetalert2";
import React from 'react';
import { useNav } from '../customHooks/useNav';
import { Col, Row } from "react-bootstrap";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaGithub, FaQuoteRight, FaRegFilePdf, FaYoutube} from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import ReactGA from "react-ga4";

const Publications = () => {
    const publicationsRef = useNav('Publications');

    const article_6_citation =
        '@article{tr2024practical,\n' +
        '   title = {A Practical Approach to Novel Class Discovery in Tabular Data},\n' +
        '   author = {Troisemaine, Colin and Reiffers{-}Masson, Alexandre and Gosselin, St{\'{e}}phane and Lemaire, Vincent and Vaton, Sandrine},\n' +
        '   journal = {Data Mining and Knowledge Discovery},\n' +
        '   year = {2024},\n' +
        '   month = {May},\n' +
        '   day = {31},\n' +
        '   issn = {1573-756X},\n' +
        '   doi = {10.1007/s10618-024-01025-y}\n' +
        '}'

    const article_5_citation =
        '@inproceedings{tr2023interface,\n' +
        '   title = {An Interactive Interface for Novel Class Discovery in Tabular Data},\n' +
        '   author = {Troisemaine, Colin and Flocon{-}Cholet, Joachim and Gosselin, St{\'{e}}phane and Reiffers{-}Masson, Alexandre and Vaton, Sandrine and Lemaire, Vincent},\n' +
        '   booktitle = {Machine Learning and Knowledge Discovery in Databases: Applied Data Science and Demo Track},\n' +
        '   volume = {14175},\n' +
        '   pages = {295--299},\n' +
        '   publisher = {Springer},\n' +
        '   year = {2023},\n' +
        '   doi = {10.1007/978-3-031-43430-3\\_18},\n' +
        '}'

    const article_4_citation =
        '@article{tr2023introduction,\n' +
        '   title = {Novel Class Discovery: an Introduction and Key Concepts},\n' +
        '   author = {Troisemaine, Colin and Lemaire, Vincent and Gosselin, St{\'{e}}phane and Reiffers{-}Masson, Alexandre and Flocon{-}Cholet, Joachim and Vaton, Sandrine},\n' +
        '   journal = {ArXiv},\n' +
        '   year = {2023},\n' +
        '   doi = {10.48550/ARXIV.2302.12028}\n' +
        '}'

    const article_3_citation =
        '@inproceedings{tr2023decouvrir,\n' +
        '   title = {D{\'{e}}couvrir de nouvelles classes dans des donn{\'{e}}es tabulaires},\n' +
        '   author = {Troisemaine, Colin and Flocon{-}Cholet, Joachim and Gosselin, St{\'{e}}phane and Vaton, Sandrine and Reiffers{-}Masson, Alexandre and Lemaire, Vincent},\n' +
        '   booktitle = {Extraction et Gestion des Connaissances, {EGC}},\n' +
        '   series = {{RNTI}},\n' +
        '   volume = {{E-39}},\n' +
        '   pages = {467--474},\n' +
        '   publisher = {Editions {RNTI}},\n' +
        '   year = {2023}\n' +
        '}'

    const article_2_citation =
        '@inproceedings{tr2022method,\n' +
        '   title = {A Method for Discovering Novel Classes in Tabular Data},\n' +
        '   author = {Troisemaine, Colin and Flocon{-}Cholet, Joachim and Gosselin, St{\'{e}}phane and Vaton, Sandrine and Reiffers{-}Masson, Alexandre and Lemaire, Vincent},\n' +
        '   booktitle = {{IEEE} International Conference on Knowledge Graph, {ICKG}},\n' +
        '   pages = {265--274},\n' +
        '   publisher = {{IEEE}},\n' +
        '   year = {2022},\n' +
        '   doi = {10.1109/ICKG55886.2022.00041}\n' +
        '}'

    const article_1_citation =
        '@article{tr2022construction,\n' +
        '   title = {Construction de variables à l\'aide de classifieurs comme aide à la régression : une évaluation empirique},\n' +
        '   author = {Colin Troisemaine and Vincent Lemaire},\n' +
        '   journal = {Revue des Nouvelles Technologies de l\'Information},\n' +
        '   volume = {Extraction et Gestion des Connaissances, RNTI-E-38},\n' +
        '   year = {2022},\n' +
        '   pages = {217--224}\n' +
        '}'

    function cite_article(citation) {
        ReactGA.event({
            category: "Citation",
            action: "user hit citation button",
        });

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

    function citation_5_swal_video_popup() {
        Swal.fire({
            title: ' ',
            html:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/W7ru8NHPj-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            width: 620,
            showCloseButton: true,
            showConfirmButton: false,
        })
    }

    return (
        <section ref={publicationsRef} id='publicationsContainer'>
            <Row>
                <Col className="col-12 col-lg-3">
                    <h1>Publications</h1>
                </Col>
                <Col className="col-12 col-lg-9">

                    <Row className="my-3">
                        <Col xs={12} sm={3} className="d-flex justify-content-center align-items-center order-2 order-sm-1 padding_when_extra_small">
                            <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/PracticalNCD'>
                                <img
                                    src="/assets/papers_illustrations/tsne_gif_preview.png"
                                    onMouseOver={e => (e.currentTarget.src = "/assets/papers_illustrations/tsne_gif.gif")}
                                    onMouseOut={e => (e.currentTarget.src = "/assets/papers_illustrations/tsne_gif_preview.png")}
                                    style={{width: "100%", height: "auto", maxWidth: "170px"}}
                                    alt="PracticalNCD, NCD-k-means principle"
                                    id="grow_div"
                                />
                            </a>
                        </Col>
                        <Col xs={12} sm={9} className="order-1 order-sm-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width: "100%"}}>
                                <div>
                                    <FontAwesomeIcon icon={faFileAlt}/>
                                    <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://link.springer.com/article/10.1007/s10618-024-01025-y">
                                        A Practical Approach to Novel Class Discovery in Tabular Data
                                    </a>
                                </div>
                                <div className="pt-1">
                                    <a id="article_metadata" rel="noreferrer" target="_blank" href="https://link.springer.com/journal/10618">
                                        Data Mining and Knowledge Discovery
                                    </a>
                                </div>
                                <Row className="pt-1">
                                    <Col xs={{ order: 2 }} sm={{ order: 1 }} className="flex-grow" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 1 }}>
                                        <button id="custom_button" onClick={() => cite_article(article_6_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaQuoteRight style={{marginRight: "3px"}}/> Cite
                                        </button>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 mx-2 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/publications/DAMI_2024_Colin.pdf" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaRegFilePdf style={{marginRight: "3px"}}/> PDF
                                        </a>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/PracticalNCD" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaGithub style={{marginRight: "3px"}}/> Code
                                        </a>
                                    </Col>
                                    <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: "auto" }} className="d-flex align-items-center">
                                        <p id="education_p_2" className="my-1">May 2024</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3">
                        <Col className="d-flex justify-content-center align-items-center order-2 order-sm-1 padding_when_extra_small" xs={12} sm={3}>
                            <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/InteractiveClustering'>
                                <img src="/assets/papers_illustrations/InteractiveClusteringInterfaceAnnotated.webp" style={{width: "100%", height: "auto", maxWidth: "170px"}} alt="Interactive Clustering Interface" id="grow_div"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={9} className="order-1 order-sm-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width: "100%"}}>
                                <div>
                                    <FontAwesomeIcon icon={faFileAlt}/>
                                    <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://link.springer.com/chapter/10.1007/978-3-031-43430-3_18">
                                        An Interactive Interface for Novel Class Discovery in Tabular Data
                                    </a>
                                </div>
                                <div className="pt-1">
                                    <a id="article_metadata" rel="noreferrer" target="_blank" href="https://2023.ecmlpkdd.org/">
                                        European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML PKDD 2023)
                                    </a>
                                </div>
                                <Row className="pt-1">
                                    <Col xs={{ order: 2 }} sm={{ order: 1 }} className="flex-grow" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 1 }}>
                                        <button id="custom_button" onClick={() => cite_article(article_5_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal" style={{display:"flex", alignItems:"center"}}>
                                            <FaQuoteRight style={{marginRight: "3px"}}/> Cite
                                        </button>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 mx-2 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/publications/ECML_PKDD_2023_Demo_Colin.pdf" style={{display:"flex", alignItems:"center"}}>
                                            <FaRegFilePdf style={{marginRight: "3px"}}/> PDF
                                        </a>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/InteractiveClustering" style={{display:"flex", alignItems:"center"}}>
                                            <FaGithub style={{marginRight: "3px"}}/> Code
                                        </a>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 mx-2 btn-sm js-cite-modal" href="/#" onClick={() => citation_5_swal_video_popup()} style={{display:"flex", alignItems:"center"}}>
                                            <FaYoutube style={{marginRight: "3px"}}/> Video
                                        </a>
                                    </Col>
                                    <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: "auto" }} className="d-flex align-items-center">
                                        <p id="education_p_2" className="my-1">Sept. 2023</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3">
                        <Col className="d-flex justify-content-center align-items-center order-2 order-sm-1 padding_when_extra_small" xs={12} sm={3}>
                            <img src="/assets/papers_illustrations/NCD_Setup_Illustration.webp" style={{width: "100%", height: "auto", maxWidth: "170px"}} alt="Interactive Clustering Interface"/>
                        </Col>
                        <Col xs={12} sm={9} className="order-1 order-sm-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width: "100%"}}>
                                <div>
                                    <FontAwesomeIcon icon={faFileAlt}/>
                                    <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://arxiv.org/abs/2302.12028">
                                        Novel Class Discovery: an Introduction and Key Concepts
                                    </a>
                                </div>
                                <div className="pt-1">
                                    <a id="article_metadata" rel="noreferrer" target="_blank" href="https://arxiv.org/">
                                        Arxiv preprint
                                    </a>
                                </div>
                                <Row className="pt-1">
                                    <Col xs={{ order: 2 }} sm={{ order: 1 }} className="flex-grow" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 1 }}>
                                        <button id="custom_button" onClick={() => cite_article(article_4_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal" style={{display:"flex", alignItems:"center"}}>
                                            <FaQuoteRight style={{marginRight: "3px"}}/> Cite
                                        </button>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 mx-2 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/publications/ArXiv_Preprint_2023_Colin.pdf" style={{display:"flex", alignItems:"center"}}>
                                            <FaRegFilePdf style={{marginRight: "3px"}}/> PDF
                                        </a>
                                    </Col>
                                    <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: "auto" }} className="d-flex align-items-center">
                                        <p id="education_p_2" className="my-1">Feb. 2023</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3">
                        <Col className="d-flex justify-content-center align-items-center order-2 order-sm-1 padding_when_extra_small" xs={12} sm={3}>
                            <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/TabularNCD'>
                                <img src="/assets/papers_illustrations/TabularNCD_step_3_Francais.webp" style={{width: "100%", height: "auto", maxWidth: "170px"}} alt="TabularNCD architecture (en français)" id="grow_div"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={9} className="order-1 order-sm-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width: "100%"}}>
                                <div>
                                    <FontAwesomeIcon icon={faFileAlt}/>
                                    <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://www.researchgate.net/publication/365849981_Decouvrir_de_nouvelles_classes_dans_des_donnees_tabulaires">
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
                                <Row className="pt-1">
                                    <Col xs={{ order: 2 }} sm={{ order: 1 }} className="flex-grow" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 1 }}>
                                        <button id="custom_button" onClick={() => cite_article(article_3_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal" style={{display:"flex", alignItems:"center"}}>
                                            <FaQuoteRight style={{marginRight:"3px"}}/> Cite
                                        </button>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 mx-2 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/publications/EGC_2023_Colin.pdf" style={{display:"flex", alignItems:"center"}}>
                                            <FaRegFilePdf style={{marginRight:"3px"}}/> PDF
                                        </a>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/TabularNCD" style={{display:"flex", alignItems:"center"}}>
                                            <FaGithub style={{marginRight:"3px"}}/> Code
                                        </a>
                                    </Col>
                                    <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: "auto" }} className="d-flex align-items-center">
                                        <p id="education_p_2" className="my-1">Jan. 2023</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3">
                        <Col className="d-flex justify-content-center align-items-center order-2 order-sm-1 padding_when_extra_small" xs={12} sm={3}>
                            <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/TabularNCD'>
                                <img src="/assets/papers_illustrations/TabularNCD_step_3.webp" style={{width: "100%", height: "auto", maxWidth: "170px"}} alt="TabularNCD architecture" id="grow_div"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={9} className="order-1 order-sm-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width: "100%"}}>
                                <div>
                                    <FontAwesomeIcon icon={faFileAlt}/>
                                    <a className="px-2" id="article_title" rel="noreferrer" target="_blank" href="https://ieeexplore.ieee.org/abstract/document/10030036">
                                        A Method for Discovering Novel Classes in Tabular Data
                                    </a>
                                </div>
                                <div className="pt-1">
                                    <a id="article_metadata" rel="noreferrer" target="_blank" href="https://ickg2022.zhonghuapu.com/">
                                        IEEE International Conference on Knowledge Graph (ICKG 2022)
                                    </a>
                                </div>
                                <Row className="pt-1">
                                    <Col xs={{ order: 2 }} sm={{ order: 1 }} className="flex-grow" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 1 }}>
                                        <button id="custom_button" onClick={() => cite_article(article_2_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal" style={{display:"flex", alignItems:"center"}}>
                                            <FaQuoteRight style={{marginRight:"3px"}}/> Cite
                                        </button>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 mx-2 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/publications/ICKG_2022_Colin.pdf" style={{display:"flex", alignItems:"center"}}>
                                            <FaRegFilePdf style={{marginRight:"3px"}}/> PDF
                                        </a>
                                        <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/TabularNCD" style={{display:"flex", alignItems:"center"}}>
                                            <FaGithub style={{marginRight:"3px"}}/> Code
                                        </a>
                                    </Col>
                                    <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: "auto" }} className="d-flex align-items-center">
                                        <p id="education_p_2" className="my-1">Nov. 2022</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <center><hr style={{width: '90%'}}/></center>

                    <Row className="my-3">
                        <Col className="d-flex justify-content-center align-items-center order-2 order-sm-1 padding_when_extra_small" xs={12} sm={3}>
                            <a rel="noreferrer" target="_blank" href='https://github.com/ColinTr/ClassificationForRegression'>
                                <img src="/assets/papers_illustrations/egc_2022_principe_general.png" style={{width: "100%", height: "auto", maxWidth: "170px"}} alt="Principe général" id="grow_div"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={9} className="order-1 order-sm-2">
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
                            <Row className="pt-1">
                                <Col xs={{ order: 2 }} sm={{ order: 1 }} className="flex-grow" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 1 }}>
                                    <button id="custom_button" onClick={() => cite_article(article_1_citation)} className="btn btn-outline-primary my-1 btn-sm js-cite-modal" style={{display:"flex", alignItems:"center"}}>
                                        <FaQuoteRight style={{marginRight:"3px"}}/> Cite
                                    </button>
                                    <a id="custom_button" className="btn btn-outline-primary my-1 mx-2 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="/assets/publications/EGC_2022_Colin.pdf" style={{display:"flex", alignItems:"center"}}>
                                        <FaRegFilePdf style={{marginRight:"3px"}}/> PDF
                                    </a>
                                    <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm js-cite-modal" rel="noreferrer" target="_blank" href="https://github.com/ColinTr/ClassificationForRegression" style={{display:"flex", alignItems:"center"}}>
                                        <FaGithub style={{marginRight:"3px"}}/> Code
                                    </a>
                                </Col>
                                <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: "auto" }} className="d-flex align-items-center">
                                    <p id="education_p_2" className="my-1">Jan. 2022</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </section>
    );
};

export default Publications;