import React from "react";

const BlogLinkElement = ({path, page_title}) => {
    return (
        <div style={{color: "#00000099"}}>
            <a rel="noreferrer" href="/" id="skill_link">Home</a>
            &nbsp;>&nbsp;
            <a rel="noreferrer" href="/#/blog" id="skill_link">Blog posts</a>
            &nbsp;>&nbsp;
            <a rel="noreferrer" href={"/#" + path} id="skill_link">{page_title}</a>
        </div>
    );
}

export default BlogLinkElement;