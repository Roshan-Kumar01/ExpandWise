// PartneredCarriersModal.js
import React from 'react';
import './PartneredCarriersModal.css';

function PartneredCarriersModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Ship with ExpandWise partnered carriers</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="carrier-item">
            <h3>1. FBA</h3>
            <p>
              The Partnered Carrier program allows you to send your Fulfillment by ExpandWise(FBA) inventory from India to fulfillment centers in the US.
            </p>
            <a href="#" className="view-details-link">View more details</a>
          </div>

          <div className="carrier-item">
            <h3>2. MFN</h3>
            <p>
              You can use ExpandWise's buy shipping services to send your seller-fulfilled orders directly to customers in the US.
            </p>
            <a href="#" className="view-details-link">View more details</a>
            <p className="note">(You will need an ExpandWise seller account to view this page.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartneredCarriersModal;
