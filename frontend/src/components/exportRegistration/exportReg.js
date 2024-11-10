// src/ExportsRegistration.js
import React from 'react';
import './exportReg.css';
import { Link } from 'react-router-dom';

const ExportsRegistration = ({isMenuOpen}) => {
  return (
    <div className={`exports-registration right-component ${isMenuOpen ? 'right-component--with-sidebar' : 'right-component--expanded'}`}>
      <h1>Exports Registration</h1>
      
      <p className="description">
        Go to each section to learn more about the compliance requirements, view registration steps, or request for assistance.
      </p>

      <div className="compliance-cards">
      <Link to="/iec-code" style={{ textDecoration: 'none' }}>
        <div className="compliance-card">
          <span className="card-number">1</span>
          <h3>IEC Code</h3>
          <p>
            The Importer-Exporter Code (IEC) is a key business identification number and is mandatory for exporting or importing in India.
          </p>
        </div>
        </Link>
        
        <Link to="/ad-code" style={{ textDecoration: 'none' }}>
        <div className="compliance-card">
          <span className="card-number">2</span>
          <h3>AD Code</h3>
          <p>
            Authorized dealer (AD) code is a 14-digit unique code allotted to banks dealing in foreign currency by RBI.
          </p>
        </div>
        </Link>

        <Link to="/gst-lut" style={{ textDecoration: 'none' }}>
        <div className="compliance-card">
          <span className="card-number">3</span>
          <h3>GST LUT</h3>
          <p>
            Letter of Undertaking (LUT) is a document that exporters can file to export goods or services without having to pay IGST.
          </p>
        </div>
        </Link>

        <Link to="/ior" style={{ textDecoration: 'none' }}>
        <div className="compliance-card">
          <span className="card-number">4</span>
          <h3>IOR</h3>
          <p>
            An Importer on Record (IOR) is needed for importing products (under certain conditions) into the USA.
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ExportsRegistration;
