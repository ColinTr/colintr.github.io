import React from 'react';
import Footer from "./Footer";

import '..//pages/Page.css'

function NotFound() {
    return (
        <div id="appContainer" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', textAlign: 'center'}}>
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                    404
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                    Oops! The page you are looking for does not exist.
                </p>
                <a id="article_title" href="/" style={{ fontSize: '1.2rem', textDecoration: 'none' }}>
                    Go back to Home
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;