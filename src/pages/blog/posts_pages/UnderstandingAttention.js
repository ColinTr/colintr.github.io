import React from "react";
import {DiscussionEmbed} from "disqus-react";

const UnderstandingAttention = () => {
    return (
        <div style={{width: "100%"}}>
            <h1>Understanding Attention</h1>
            Work in progress...

            <DiscussionEmbed
                shortname='colintr-fr'
                config={
                    {
                        url: window.location.href,
                        identifier: "understanding_attention",
                        title: "Understanding Attention",
                        language: 'en' //e.g. for Traditional Chinese (Taiwan)
                    }
                }
            />
        </div>
    );
};

export default UnderstandingAttention;