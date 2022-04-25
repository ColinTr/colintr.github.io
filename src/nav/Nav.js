import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import {Col, Row, Container} from "react-bootstrap";

const Nav = () => {
    return (
        <nav style={{overflowY: "hidden", overflowX:"auto"}}>
            <Container style={{maxWidth: '1200px', minWidth: '510px'}}>
                <Row>
                    <Col style={{textAlign: 'left'}}>
                        <div className='navSubElement'>
                            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                                <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                            ))}
                        </div>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <span className="linkCV"><a href='/assets/CV Colin Troisemaine.pdf'>CV</a></span>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};

export default Nav;