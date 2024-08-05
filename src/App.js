import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';
import './pages/Page.css'
import ReactGA from "react-ga4";
import Footer from "./pages/Footer";

ReactGA.initialize("G-R8XSGWP0YR");
ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

function App() {
    return (
        <div className='appContainer' id="appContainer">
            <NavProvider>
                <Nav/>
                <Main/>
            </NavProvider>
            <Footer/>
        </div>
    );
}

export default App;