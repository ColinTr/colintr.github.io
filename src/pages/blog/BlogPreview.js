import {useNav} from "../../customHooks/useNav";
import {Col, Row} from "react-bootstrap";
import React from "react";
import blogPages from './BlogPages'
import moment from "moment/moment";

export function getLatestBlogArticles(max_elements) {
    let sliced_array ;
    if (max_elements) {
        sliced_array = blogPages.slice(0, max_elements)
    } else {
        sliced_array = blogPages
    }

    return sliced_array.map((item, index) => (
        <div key={item["title"]}>
            <Row className="my-3">
                <Col xs={12} sm={9}>
                    <h3>
                        <a rel="noreferrer" href={"/#/blog/" + item.blogPageAddress} id="skill_link">
                            {item.title}
                        </a>
                    </h3>
                    <p align="justify" className="my-1">
                        {item.description}
                    </p>
                    <Row>
                        <Col xs={12} sm={"auto"} className="d-flex align-items-center">
                            <p id="education_p_2" className="my-1">{moment(Date.parse(item.date)).format("MMM Do YYYY")}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={3} className="order-2 order-sm-1 d-flex justify-content-center align-items-center padding_when_extra_small">
                    <a rel="noreferrer" href={"/#/blog/" + item.blogPageAddress}>
                        <img src={item.illustration} style={{width: "100%", height: "auto", maxWidth: "170px"}} width="170" alt="project 1 illustration" id="grow_div"/>
                    </a>
                </Col>
            </Row>
            {index < sliced_array.length - 1 ? <center><hr style={{width: '90%'}}/></center> : <div/>}
        </div>
    ))
}

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

                    <center><hr style={{width: '90%'}}/></center>

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