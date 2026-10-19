import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPricing from './pages/ServicesPricing';
import Pricing from './pages/Pricing';
import AboutContact from './pages/AboutContact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="site-layout">
        <div className="ruled-lines-frame" aria-hidden="true">
          {/* Left Double Track */}
          <div className="ruled-track ruled-track--left">
            <span className="ruled-corner-tag ruled-corner-tag--top">+ 01 · L</span>
            <div className="ruled-ticks" />
            <div className="ruled-line ruled-line--outer" />
            <div className="ruled-line ruled-line--inner" />
            <span className="ruled-corner-tag ruled-corner-tag--bottom">+ END</span>
          </div>

          {/* Right Double Track */}
          <div className="ruled-track ruled-track--right">
            <span className="ruled-corner-tag ruled-corner-tag--top">02 · R +</span>
            <div className="ruled-ticks" />
            <div className="ruled-line ruled-line--inner" />
            <div className="ruled-line ruled-line--outer" />
            <span className="ruled-corner-tag ruled-corner-tag--bottom">END +</span>
          </div>
        </div>

        <Header />
        <div className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPricing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<AboutContact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;