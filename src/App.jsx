import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPricing from './pages/ServicesPricing';
import Pricing from './pages/Pricing';
import AboutContact from './pages/AboutContact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPricing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutContact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;