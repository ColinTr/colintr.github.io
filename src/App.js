import { Main } from './pages';
import NavProvider from './nav/NavContext';
import './pages/Page.css'
import ReactGA from "react-ga4";
import Footer from "./pages/Footer";
import Nav from "./nav/Nav";
import React from "react";

ReactGA.initialize("G-R8XSGWP0YR");
ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

function App() {
    return (
        <div className='appContainer' id="appContainer">
            <NavProvider>
                <Nav/>
                <Main/>
                <Footer/>
            </NavProvider>
        </div>
    );
}

export default App;