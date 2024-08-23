import React from 'react';
import './index.css';
import App from './App';
import './pages/Page.css'
import { createRoot } from 'react-dom/client';
import BlogMainPage from "./pages/blog/BlogMainPage";
import blogPages from "./pages/blog/BlogPages";
import NotFound from "./pages/NotFound";
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter >
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/blog" element={<BlogMainPage />}>
                    {blogPages.map((item, idx) => (
                        <Route path={item.blogPageAddress} element={item.blogPageComponent} key={"key" + idx} />
                    ))}
                </Route>
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </HashRouter >
    </React.StrictMode>
);
