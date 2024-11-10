import React, { useState } from 'react';
import './IECModal.css';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Modal({ isOpen, onClose }) {
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  if (!isOpen) return null;

  const toggleDocuments = () => setIsDocumentsOpen(!isDocumentsOpen);
  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>IEC Code</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <h3>Self registration steps</h3>
          <p>Please follow the below steps for obtaining an IEC code -</p>
          <ol>
            <li>Visit the DGFT website (<a href="https://www.dgft.gov.in" target="_blank" rel="noopener noreferrer">www.dgft.gov.in</a>) and start the registration process.</li>
            <li>Enter your details (like Name, PAN number, etc) for registration.</li>
            <li>Enter the OTPs received on email and mobile number.</li>
            <li>Upon successful validation of the OTP, you will receive a notification containing the temporary password, which you need to change upon first login.</li>
            <li>Go to ‘Apply for IEC’, fill in the required details and make the payment of the legal fee (INR 500).</li>
            <li>You will be able to download your IEC certificate after your application is approved.</li>
          </ol>
        </div>
        <div className="modal-footer">
          <button className="accordion" onClick={toggleDocuments}>
            Documents required for IEC registration {isDocumentsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isDocumentsOpen && (
            <div className="accordion-content">
              <ul>
                <li>a. PAN card</li>
                <li>b. Aadhaar card</li>
                <li>c. GST Registration certificate</li>
                <li>d. Cancelled cheque or latest bank statement</li>
                <li>e. Along with the above documents, you will need a valid email, mobile number and your digital signature</li>
              </ul>
            </div>
          )}
          <button className="accordion" onClick={toggleLinks}>
            Links for reference {isLinksOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isLinksOpen && (
            <div className="accordion-content">
              <p><a href="https://content.dgft.gov.in/Website/DGFT%20-%20IEC%20Module%20User%20Help%20File.pdf" target="_blank" rel="noopener noreferrer">Process for IEC application</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
