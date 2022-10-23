import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FacebookLogo from './images/FacebookLogo.png';
import InstagramLogo from './images/InstagramLogo.png';
import RuffTradeLogo from './images/RuffTradeLogo.png';
import IndexPage from './pages';
import About from './pages/about';
import Bookings from './pages/bookings';
import Music from './pages/music';
import Gallery from './pages/gallery';
import Buy from './pages/buy';

function App() {
  return (
    <div>
      <BrowserRouter>
      <footer className="footer">
            <a  href="https://www.facebook.com/RUFFTRADE.reggae" target="_blank" rel="noreferrer">
                <img className="socialMediaLogo" src={FacebookLogo} alt="Link to Ruff Trade Facebook page" />
            </a>
            <img className="footerLogo" src={RuffTradeLogo} alt="Ruff Trade Logo" />
            <a href="https://www.instagram.com/rufftradeuk/" target="_blank" rel="noreferrer">
                <img className="socialMediaLogo" src={InstagramLogo} alt="Link to Ruff Trade Instagram page" />
            </a>
        </footer>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
