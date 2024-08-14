import React from "react";
import ReactGA from "react-ga4";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import { DiscussionEmbed } from 'disqus-react';
import {Container, Row} from "react-bootstrap";
import ChangeDocumentTitle from "../../../utils/ChangeDocumentTitle";

ReactGA.initialize("G-R8XSGWP0YR");

const PrintYourBrain = () => {
    ChangeDocumentTitle("Colin | 3D print your brain")
    ReactGA.send({ hitType: "pageview", page: "/#/blog/3d_print_your_brain", title: "Colin | 3D print your brain" });

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <div style={{color: "#00000099"}}>
                        <a rel="noreferrer" href="/" id="skill_link">Home</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog" id="skill_link">Blog posts</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog/3d_print_your_brain" id="skill_link">3D print your brain</a>
                    </div>

                    <h1>3D print your brain</h1>

                    Work in progress...

                    <br/>

                    Download model (35.4 Mo)
                    <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm" rel="noreferrer" target="_blank" href="/assets/3d_brain_model.stl" style={{padding: "0 1 0 1"}}>
                        <FontAwesomeIcon icon={faDownload} className="fa-lg"/>
                    </a>
                </div>
            </Row>

            <Row style={{flex: 0, display: "flex"}}>
                <DiscussionEmbed
                    shortname='colintr-fr'
                    config={
                        {
                            url: window.location.href,
                            identifier: "3d_print_your_brain",
                            title: "3D print your brain",
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default PrintYourBrain;