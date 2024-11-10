// src/components/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({ isMenuOpen }) => {
  return (
    <main className={`right-component ${isMenuOpen ? 'right-component--with-sidebar' : 'right-component--expanded'}`}>
      <h1>Exports Compliance Dashboard</h1>
      <p>
        We currently provide assistance on Export registration, Product documentation, Shipping documentation, Payment reconciliation, 
        and Tax documentation requirements for exporting from India to the United States of America (USA).
      </p>
      <p>
        To start exporting from India, a few basic regulations need to be met. Similarly, the USA has a set of import regulations with certifications 
        and labeling requirements for certain products, which are required to be met by you. We provide you with a one-stop solution to get the information 
        in relation to the export requirements and meet them through expert third-party service providers. Click below to get more information and assistance 
        with these requirements.
      </p>
      <div className="card-container">
        <div className="card">
      <Link to="/exports-registration" style={{ textDecoration: 'none' }}>
          <img src="https://d37d9scfo5x8dm.cloudfront.net/Home_Card_Export.bc0d3e27.webp" alt="Export Registration" />
          <h3>Export Registration</h3>
      </Link>
        </div>

        <div className="card">
          <img src="https://d37d9scfo5x8dm.cloudfront.net/Home_Card_Product.a28c2903.webp" alt="Product Documentation" />
          <h3>Product Documentation</h3>
        </div>
        <div className="card">
          <img src="https://d37d9scfo5x8dm.cloudfront.net/Home_Card_Shipping.29a30351.webp" alt="Shipping Documentation" />
          <h3>Shipping Documentation</h3>
        </div>
        <div className="card">
          <img src="https://d37d9scfo5x8dm.cloudfront.net/Home_Card_Payment.1005505e.webp" alt="Payment Reconciliation" />
          <h3>Payment Reconciliation</h3>
        </div>
        <div className="card">
          <img src="https://d37d9scfo5x8dm.cloudfront.net/Home_Card_Tax.1931b9d0.webp" alt="Tax Documentation" />
          <h3>Tax Documentation</h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
