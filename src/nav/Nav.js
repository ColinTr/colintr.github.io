import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className='navSubElement'>
                {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                    <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                ))}
                <span className="linkCV"><a href='/assets/CV Colin Troisemaine.pdf'>CV</a></span>
            </div>
        </nav>
    );
};

export default Nav;