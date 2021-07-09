import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router basename={process.env.PUBLIC_URL}>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route component={NotFound} status={404}/>
                </Router>
            </div>
        );
    }
}

export default App;