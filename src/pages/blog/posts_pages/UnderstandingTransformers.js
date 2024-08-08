import React from "react";
import {DiscussionEmbed} from "disqus-react";

const UnderstandingTransformers = () => {
    return (
        <div style={{width: "100%"}}>
            <h1>Understanding Transformers</h1>
            Work in progress...

            <DiscussionEmbed
                shortname='colintr-fr'
                config={
                    {
                        url: window.location.href,
                        identifier: "understanding_transformers",
                        title: "Understanding Transformers",
                        language: 'en' //e.g. for Traditional Chinese (Taiwan)
                    }
                }
            />
        </div>
    );
};

export default UnderstandingTransformers;