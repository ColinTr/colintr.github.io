import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';
import './App.css';

function App() {
    return (
        <div className='appContainer'>
            <NavProvider>
                <Nav />
                <Main />
            </NavProvider>
        </div>
        // <embed src={'/assets/CV Colin Troisemaine.pdf'} width="600" height="900" type="application/pdf"/>
    );
}

export default App;