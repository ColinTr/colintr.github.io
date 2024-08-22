import React from "react";
import ReactGA from "react-ga4";
import {DiscussionEmbed} from "disqus-react";
import {Col, Container, Row} from "react-bootstrap";
import useChangeDocumentTitle from "../../../utils/ChangeDocumentTitle";

ReactGA.initialize("G-R8XSGWP0YR");

const UnderstandingAttention = () => {
    useChangeDocumentTitle("Colin | Understanding Attention");
    ReactGA.send({ hitType: "pageview", page: "/#/blog/understanding_transformers", title: "Colin | Understanding Attention" });

    // Scroll to the top of the component when it is rendered
    window.scrollTo(0, 0)

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <div style={{color: "#00000099"}}>
                        <a rel="noreferrer" href="/" id="skill_link">Home</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog" id="skill_link">Blog posts</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog/understanding_attention" id="skill_link">Understanding Attention</a>
                    </div>

                    <Row className="py-3">
                        <Col className="col-auto" style={{ flexGrow: 1 }}>
                            <h1>Understanding Attention</h1>
                        </Col>
                        <Col className="d-flex align-items-center col-auto">
                            <p id="education_p_2" className="my-1">Written in August 2024</p>
                        </Col>
                    </Row>

                    Work in progress...
                </div>
            </Row>

            <Row style={{flex: 0, display: "flex"}}>
                <DiscussionEmbed
                    shortname='colintr-fr'
                    config={
                        {
                            url: window.location.href,
                            identifier: "understanding_attention",
                            title: "Understanding Attention",
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default UnderstandingAttention;