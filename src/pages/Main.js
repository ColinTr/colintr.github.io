import React from 'react';
import { Home, Skills, Projects, Publications, Experience } from './';
import BlogPreview from "./blog/BlogPreview";

const Main = () => (
    <main id="main-container">
        <Home />
        <Skills />
        <Publications />
        <BlogPreview />
        <Projects />
        <Experience />
    </main>
);

export default Main;