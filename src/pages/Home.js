import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Home = () => {
    // useNav takes in a navLinkId and returns a ref
    // this ref is used to register the navLinkId that's
    // currently in view, and apply activeClass styling
    // to the corresponding nav childElement

    const homeRef = useNav('Home');

    return (
        <section ref={homeRef} id='homeContainer'>
            <div style={{align: "center"}}>
                <img src='/assets/profil_rond.png' alt="profile" style={{'width': '200px'}}/>
                <div id='portrait-title'>
                    <h2>Colin Troisemaine</h2>
                    <h4>Ph.D Student at Orange and IMT Atlantique</h4>
                    <div className='linksTab'>
                        <span><a rel="noreferrer" target="_blank" href='https://scholar.google.com/citations?user=bs3E-o4AAAAJ'><img src='/assets/google_scholar_logo.png' alt="google scholar" style={{'width': '32px'}}/></a></span>
                        <span><a rel="noreferrer" target="_blank" href='https://github.com/ColinTr'><img src='/assets/github_logo.png' alt="github" style={{'width': '32px'}}/></a></span>
                        <span><a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/colin-troisemaine/'><img src='/assets/linkedin_logo.png' alt="github" style={{'width': '32px'}}/></a></span>
                    </div>
                </div>
            </div>
            <div>
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    );
};

export default Home;