// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ExportsRegistration from './components/exportRegistration/exportReg';
import IECCode from './components/exportRegistration/IECCode/IECCode';
import ADCode from './components/exportRegistration/ADCode/ADCode';
import GSTCode from './components/exportRegistration/GSTLUT/GSTCode';
import IORCode from './components/exportRegistration/IOR/IORCode';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Router>
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="app__content">
          <Sidebar isVisible={isMenuOpen} />
          <Routes>
            <Route path="/" element={<Home isMenuOpen={isMenuOpen} />} />
            <Route path="/exports-registration" element={<ExportsRegistration isMenuOpen={isMenuOpen} />} />
            <Route path="/iec-code" element={<IECCode isMenuOpen={isMenuOpen} />} />
            <Route path="/ad-code" element={<ADCode isMenuOpen={isMenuOpen} />} />
            <Route path="/gst-lut" element={<GSTCode isMenuOpen={isMenuOpen} />} />
            <Route path="/ior" element={<IORCode isMenuOpen={isMenuOpen} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
