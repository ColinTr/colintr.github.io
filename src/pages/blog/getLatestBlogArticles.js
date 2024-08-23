import blogPages from "./BlogPages";
import {Col, Row} from "react-bootstrap";
import moment from "moment";
import React from "react";

export function getLatestBlogArticles(max_elements) {
    let sliced_array ;
    if (max_elements) {
        sliced_array = blogPages.slice(0, max_elements)
    } else {
        sliced_array = blogPages
    }

    return sliced_array.map(function(item, index) {
            if (item["hidden"] === false) {
                return <div key={item["title"]}>
                    <center><hr style={{width: '90%'}}/></center>
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
                                    <p id="education_p_2"
                                       className="my-1">{moment(Date.parse(item.date)).format("MMM Do YYYY")}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={3}
                             className="order-2 order-sm-1 d-flex justify-content-center align-items-center padding_when_extra_small">
                            <a rel="noreferrer" href={"/#/blog/" + item.blogPageAddress}>
                                <img src={item.illustration} style={{width: "100%", height: "auto", maxWidth: "170px"}}
                                     width="170" alt="project 1 illustration" id="grow_div"/>
                            </a>
                        </Col>
                    </Row>
                </div>
            } else {
                return <div key={item["title"]}/>
            }
        }
    )
}