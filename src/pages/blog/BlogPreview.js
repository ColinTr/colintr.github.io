import {useNav} from "../../customHooks/useNav";
import {Col, Row} from "react-bootstrap";
import React from "react";
import {getLatestBlogArticles} from "./getLatestBlogArticles";

const BlogPreview = () => {
    const blogPreviewRef = useNav('BlogPreview');

    return (
        <section ref={blogPreviewRef} id='blogPreviewContainer'>
            <Row>
                <Col className="col-12 col-lg-3">
                    <h1>
                        <a rel="noreferrer" href="/#/blog" id="skill_link">
                            Blog articles
                        </a>
                    </h1>
                </Col>
                <Col className="col-12 col-lg-9">
                    <Row>
                        <Col style={{backgroundColor: "#e9eaed", borderRadius: "8px", margin: "0 12px 0 12px", padding: "12px"}}>
                            <u>Note:</u> I write these blog posts mainly to deepen my own understanding of these concepts, but I hope they can help others exploring similar topics!
                        </Col>
                    </Row>

                    {/** <center><hr style={{width: '90%'}}/></center> **/}

                    {getLatestBlogArticles(5)}

                    <center><hr style={{width: '90%'}}/></center>

                    <Row style={{textAlign: "center"}}>
                        <a id="article_title" rel="noreferrer" href="/#/blog">
                            See the full list of blog articles here
                        </a>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default BlogPreview;