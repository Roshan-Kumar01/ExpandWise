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
import GenAI from './components/GenAI/GenAI';
import ChatInterface from './components/GenAI/ChatInterface';
import ShippingDoc from './components/shippingDocumentation/ShippingDoc';
import PaymentReconciliation from './components/PaymentReconciliation/PaymentReconciliation';
import TaxDocumentation from './components/TaxDocumentation/TaxDocumentation';
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
        <GenAI/>
        <div className="app__content">
          <Sidebar isVisible={isMenuOpen} />
          <Routes>
            <Route path="/" element={<Home isMenuOpen={isMenuOpen} />} />
            <Route path="/exports-registration" element={<ExportsRegistration isMenuOpen={isMenuOpen} />} />
            <Route path="/iec-code" element={<IECCode isMenuOpen={isMenuOpen} />} />
            <Route path="/ad-code" element={<ADCode isMenuOpen={isMenuOpen} />} />
            <Route path="/gst-lut" element={<GSTCode isMenuOpen={isMenuOpen} />} />
            <Route path="/ior" element={<IORCode isMenuOpen={isMenuOpen} />} />
            <Route path="/ai-chat" element={<ChatInterface/>} />
            <Route path="/shipping-documentation" element={<ShippingDoc isMenuOpen={isMenuOpen}/>} />
            <Route path="/payment-reconciliation" element={<PaymentReconciliation isMenuOpen={isMenuOpen}/>} />
            <Route path="/tax-documentation" element={<TaxDocumentation isMenuOpen={isMenuOpen}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
