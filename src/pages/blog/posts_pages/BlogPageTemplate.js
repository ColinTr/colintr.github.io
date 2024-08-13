import React from "react";
import {DiscussionEmbed} from "disqus-react";
import {Container, Row} from "react-bootstrap";

const BlogPageTemplate = () => {
    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh"}}>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <h1>Blog Page Template</h1>
                    Work in progress...
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

export default BlogPageTemplate;