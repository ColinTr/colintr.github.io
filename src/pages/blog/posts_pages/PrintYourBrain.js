import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import { DiscussionEmbed } from 'disqus-react';

const PrintYourBrain = () => {
    return (
        <div style={{width: "100%"}}>
            <h1>3D print your brain</h1>
            Work in progress...
            <br/>

            Download model (35.4 Mo)
            <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm" rel="noreferrer" target="_blank" href="/assets/3d_brain_model.stl" style={{padding: "0 1 0 1"}}>
                <FontAwesomeIcon icon={faDownload} className="fa-lg"/>
            </a>

            <DiscussionEmbed
                shortname='colintr-fr'
                config={
                    {
                        url: window.location.href,
                        identifier: "3d_print_your_brain",
                        title: "3D print your brain",
                        language: 'en' //e.g. for Traditional Chinese (Taiwan)
                    }
                }
            />
        </div>
    );
};

export default PrintYourBrain;