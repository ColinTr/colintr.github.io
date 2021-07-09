import './App.css';
import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends React.Component {
    render() {
        return (
            <main className="text-gray-400 bg-gray-900 body-font">
                <Navbar/>
                <About/>
                <Projects/>
                <Skills/>
                <Contact/>
                <center>
                    <embed src={'/assets/CV Colin Troisemaine.pdf'} width="600" height="900" type="application/pdf"/>
                </center>
            </main>
        );
    }
}

export default App;