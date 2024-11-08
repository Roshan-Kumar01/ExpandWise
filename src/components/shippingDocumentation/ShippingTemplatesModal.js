// ShippingTemplatesModal.js
import React from 'react';
import './ShippingTemplatesModal.css';

function ShippingTemplatesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Download shipping templates</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <p className="modal-description">
          Below are the shipping document templates of a few carriers for reference. 
          Please contact your logistic partner to understand the required documents.
        </p>

        <div className="carrier-section">
          <h3 className="carrier-title">FedEx</h3>
          <div className="template-buttons">
          <a href="/commercial_invoice.xlsx" download="commercial_invoice.xlsx" style={{ textDecoration: 'none' }}>
            <button className="template-btn">Commercial invoice <span className="download-icon">&#x2193;</span></button>
          </a>  
          <a href="/packing_list.xlsx" download="packing_list.xlsx" style={{ textDecoration: 'none' }}>
            <button className="template-btn">Packing List <span className="download-icon">&#x2193;</span></button>
          </a>   
          <a href="/EVD.xlsx" download="EVD.xlsx" style={{ textDecoration: 'none' }}>
            <button className="template-btn">EVD <span className="download-icon">&#x2193;</span></button>
          </a>  
          <a href="/SLI.xlsx" download="SLI.xlsx" style={{ textDecoration: 'none' }}> 
            <button className="template-btn">SLI <span className="download-icon">&#x2193;</span></button>
          </a>  
          </div>
        </div>

        <div className="carrier-section">
          <h3 className="carrier-title">DHL</h3>
          <div className="template-buttons">
          <a href="/courier_invoice.xlsx" download="courier_invoice.xlsx" style={{ textDecoration: 'none' }}> 
            <button className="template-btn">Courier invoice <span className="download-icon">&#x2193;</span></button>
          </a>  
          <a href="/cargo_document.xlsx" download="cargo_document.xlsx" style={{ textDecoration: 'none' }}>
            <button className="template-btn">Cargo documents <span className="download-icon">&#x2193;</span></button>
          </a>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingTemplatesModal;
