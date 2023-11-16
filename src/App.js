import logo from './logo.svg';
import './App.css';
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio';
import Conctact from './pages/Conctact';
import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
       
      <Routes>
        <Route path="/e-portfolio" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Conctact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
     
  
  );
}

export default App;
