import React from "react";
import ReactGA from "react-ga4";
import {DiscussionEmbed} from "disqus-react";
import {Container, Row} from "react-bootstrap";
import ChangeDocumentTitle from "../../../utils/ChangeDocumentTitle";

ReactGA.initialize("G-R8XSGWP0YR");

const UnderstandingTransformers = () => {
    ChangeDocumentTitle("Colin | Understanding Transformers")
    ReactGA.send({ hitType: "pageview", page: "/#/blog/understanding_transformers", title: "Colin | Understanding Transformers" });

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <div style={{color: "#00000099"}}>
                        <a rel="noreferrer" href="/" id="skill_link">Home</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog" id="skill_link">Blog posts</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog/understanding_transformers" id="skill_link">Understanding Transformers</a>
                    </div>

                    <h1 className="py-3">Understanding Transformers</h1>

                    Work in progress...
                </div>
            </Row>

            <Row style={{flex: 0, display: "flex"}}>
                <DiscussionEmbed
                    shortname='colintr-fr'
                    config={
                        {
                            url: window.location.href,
                            identifier: "understanding_transformers",
                            title: "Understanding Transformers",
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default UnderstandingTransformers;