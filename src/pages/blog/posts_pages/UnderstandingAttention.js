import React from "react";
import {DiscussionEmbed} from "disqus-react";
import {Container, Row} from "react-bootstrap";

const UnderstandingAttention = () => {
    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <h1>Understanding Attention</h1>
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