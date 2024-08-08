import { Main } from './pages';
import NavProvider from './nav/NavContext';
import './pages/Page.css'
import ReactGA from "react-ga4";
import Footer from "./pages/Footer";
import Nav from "./nav/Nav";
import { Routes, Route } from 'react-router-dom';
import BlogMainPage from "./pages/blog/BlogMainPage";
import blogPages from './pages/blog/BlogPages'
import React from "react";
import NotFound from "./pages/NotFound";

ReactGA.initialize("G-R8XSGWP0YR");
ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

function App() {
    return (
        <div className='appContainer' id="appContainer">
            <Routes>
                <Route path="/" element={
                    <NavProvider>
                        <Nav/>
                        <Main/>
                        <Footer/>
                    </NavProvider>
                } />
                <Route path="/blog" element={<BlogMainPage />}>
                    {blogPages.map((item, idx) => (
                        <Route path={item.blogPageAddress} element={item.blogPageComponent} key={"key" + idx} />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;