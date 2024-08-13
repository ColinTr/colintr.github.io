import React from "react";
import ReactGA from "react-ga4";
import Footer from "../Footer";
import { Outlet, useLocation, matchPath } from 'react-router-dom';
import BlogHeader from "./BlogHeader";
import {Col, Row} from "react-bootstrap";
import ChangeDocumentTitle from "../../utils/ChangeDocumentTitle";
import {getLatestBlogArticles} from "./getLatestBlogArticles";

ReactGA.initialize("G-R8XSGWP0YR");
ReactGA.send({ hitType: "pageview", page: "/", title: "Blog page" });

const BlogMainPage = () => {
    const isExactBlogRoute = matchPath({ path: '/blog', end: true }, useLocation().pathname);

    if(isExactBlogRoute) {
        ChangeDocumentTitle("Colin | Blog posts")
    }

    return (
        <div id="appContainer" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', width: "100%", margin: 0, padding: 0}}>
            <BlogHeader />

            <div style={{maxWidth: "1200px", margin: "auto", width: "100%"}}>
                <section>
                    {/* Below is only displayed if you are on /#/blog */}
                    {isExactBlogRoute &&
                        <div>
                            <div style={{color: "#00000099"}}>
                                <a rel="noreferrer" href="/" id="skill_link">Home</a>
                                &nbsp;>&nbsp;
                                <a rel="noreferrer" href="/#/blog" id="skill_link">Blog posts</a>
                            </div>

                            <h1>Colin Troisemaine's blog posts</h1>

                            <Row>
                                <Col style={{backgroundColor: "#e9eaed", borderRadius: "8px", margin: "0 12px 0 12px", padding: "12px"}}>
                                    <u>Note:</u> I write these blog posts mainly to deepen my own understanding of these concepts, but I hope they can help others exploring similar topics!
                                </Col>
                            </Row>

                            <center><hr style={{width: '90%'}}/></center>

                            {getLatestBlogArticles()}
                        </div>
                    }
                    {/* And this is the nested routes /#/blog/... */}
                    <Outlet />
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default BlogMainPage;