import React from "react";
import {DiscussionEmbed} from "disqus-react";
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import BlogLinkElement from "../BlogLinkElement";

const BlogPageTemplate = () => {
    const page_title = "Blog template"
    const path = useLocation().pathname

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh", textAlign: "justify", fontFamily: "Arial"}}>
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

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed non risus.
                    Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    Cras elementum ultrices diam.
                    Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
                    Duis semper.
                    Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                    Pellentesque congue.
                    Ut in risus volutpat libero pharetra tempor.
                    Cras vestibulum bibendum augue.
                    Praesent egestas leo in pede.
                    Praesent blandit odio eu enim.
                    Pellentesque sed dui ut augue blandit sodales.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
                    Mauris ac mauris sed pede pellentesque fermentum.
                    Maecenas adipiscing ante non diam sodales hendrerit.

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

export default BlogPageTemplate;