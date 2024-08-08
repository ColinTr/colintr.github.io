import {Col, Row} from "react-bootstrap";
import React from "react";

import './Blog.css';

const BlogHeader = () => {
    return (
        <div style={{width: "100%", backgroundColor: "white"}} className="d-flex" id="header">
            <Row style={{maxWidth: "1200px", width: "100%", margin: "auto"}} className="d-flex">
                <Col className="col-auto p-0">
                    <span className="linkCV">
                        <a href="/">
                            Home
                        </a>
                    </span>
                </Col>
                <Col className="col-auto p-0">
                    <span className="linkCV">
                        <a href="/blog">
                            Blog articles list
                        </a>
                    </span>
                </Col>
            </Row>
        </div>
    );
};

export default BlogHeader;