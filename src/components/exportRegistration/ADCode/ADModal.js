import React, { useState } from 'react';
import './ADModal.css';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Modal({ isOpen, onClose }) {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  if (!isOpen) return null;

  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>AD Code</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <h3>Self registration steps</h3>
          <p>Please follow the below steps for AD code registration -</p>
          <ol>
            <li>Exporter needs to request their bank to provide an AD code letter.</li>
            <li>Exporter needs to register their AD code at the Customs port with the following documents.
                <ol type='i'>
                <li>GST Registration</li>
                <li>Last 3 year ITRs</li>
                <li>Bank statement</li>
                <li>IEC code</li>
                <li>PAN card</li>
                <li>Company incorporation certificate (in case of company/LLP)</li>
                <li>Partner’s/Proprietor’s/Director’s Aadhaar card, PAN card and Voter ID/Passport</li>
                </ol>
            </li>
            <p>The AD code registration at Customs port can be done by authorizing a logistic partner or a Custom House Agent (CHA). An exporter can also register for it online. Please refer to the below link section for understanding the online process.</p>
          </ol>
        </div>
        <div className="modal-footer">
          <button className="accordion" onClick={toggleLinks}>
            Links for reference {isLinksOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isLinksOpen && (
            <div className="accordion-content">
              <p><a href="https://www.icegate.gov.in/guidelines/ad-code-bank-account-registration-advisory" target="_blank" rel="noopener noreferrer">Online process for AD code registration:</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
