import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import {Col} from "react-bootstrap";

const Nav = () => {
    return (
        <nav style={{overflowY: "hidden", overflowX:"auto"}} >
            <center>
                <div className="row px-1 m-0 flex-nowrap" style={{maxWidth: "1200px", margin: "auto"}}>
                    {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                        <Col className="col-auto navSubElement p-0" key={"btn" + idx}>
                            <NavLink key={"navlink" + idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                        </Col>
                    ))}
                    <Col className="flex-grow p-0 m-0" />
                    <Col className="col-auto p-0">
                        <span className="linkCV">
                            <a rel="noreferrer" target="_blank" href='/assets/CV_Latex_Colin_Troisemaine_English.pdf'>CV</a>
                        </span>
                    </Col>
                </div>
            </center>
        </nav>
    );
};

export default Nav;