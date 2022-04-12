import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Skills = () => {
    // useNav takes in a navLinkId and returns a ref
    // this ref is used to register the navLinkId that's
    // currently in view, and apply activeClass styling
    // to the corresponding nav childElement

    const skillsRef = useNav('Skills');

    return (
        <section ref={skillsRef} id='skillsContainer'>
            <img
                src='https://source.unsplash.com/random/600x600/?nature,water'
                alt='unsplash-img'
            />
            <div>
                <h3>SKILLS</h3>
                <p>This is the skills section</p>
            </div>
        </section>
    );
};

export default Skills;