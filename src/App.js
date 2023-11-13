import logo from './logo.svg';
import './App.css';
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio';
import Conctact from './pages/Conctact';
import Resume from './pages/Resume';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Conctact />} />
    <Route path="/resume" element={<Resume />} />
      </Routes>

    </div>
  );
}

export default App;
