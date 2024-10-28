import React, { useState } from 'react';
import './GSTModal.css';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Modal({ isOpen, onClose }) {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  if (!isOpen) return null;

  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>GST LUT</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <h3>Self registration steps</h3>
          <p>Please follow the below steps to generate a LUT -</p>
          <ol>
            <li>Visit GST Portal and login into your account</li>
            <li>Go to User services</li>
            <li>Under User services, select My applications, and create a new application</li>
            <li>Fill in the asked details and submit the form. An acknowledgement will be generated and the LUT can be downloaded from the portal</li>
          </ol>
        </div>
        <div className="modal-footer">
          <button className="accordion" onClick={toggleLinks}>
            Links for reference {isLinksOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isLinksOpen && (
            <div className="accordion-content">
            <ul>
              <li><a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer">GST portal</a></li>
              <li><a href="https://tutorial.gst.gov.in/userguide/refund/Furnishing_of_Letter_of_Undertaking.htm" target="_blank" rel="noopener noreferrer">Format of LUT</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
