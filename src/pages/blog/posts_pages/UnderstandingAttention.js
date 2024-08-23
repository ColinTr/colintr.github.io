import React from "react";
import {DiscussionEmbed} from "disqus-react";
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import BlogLinkElement from "../BlogLinkElement";

const UnderstandingAttention = () => {
    const page_title = "Understanding attention"
    const path = useLocation().pathname

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <BlogLinkElement path={path} page_title={page_title}/>

                    <Row className="py-3">
                        <Col className="col-auto" style={{ flexGrow: 1 }}>
                            <h1 id="page_title">{page_title}</h1>
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
                            identifier: path,
                            title: page_title,
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default UnderstandingAttention;