import React, { useState } from "react";
import "./IORModal.css";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Modal({ isOpen, onClose }) {
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [benefitsWindow, setBenefitsWindow] = useState(false);

  if (!isOpen) return null;

  const toggleDocuments = () => setIsDocumentsOpen(!isDocumentsOpen);
  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);
  const toggleBenefitsWindow = () => setBenefitsWindow(!benefitsWindow);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>IOR</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <h3>Ways to obtain an IOR</h3>
          <p>Exporters have 3 options to get an IOR -</p>
          <ol>
            <li>
              If the exporter has a US subsidiary, then a domestic IOR can be
              set up through it. For more details, refer to (
              <a
                href="https://www.cbp.gov/trade/programs-administration/entry-summary/cbp-form-5106"
                target="_blank"
                rel="noopener noreferrer"
              >
               link
              </a>
              ) and start the registration process.
            </li>
            <li>
              Exporters can acquire a foreign IOR. For obtaining a foreign IOR,
              the exporter will need to sign a Custom bond with the CBP (Custom
              & Border Protection) authority after getting a surety letter from
              their bank. This can be done via an agent physically present at US
              Customs or through a logistic partner.
            </li>
            <li>
              Exporters can work with a 3P service provider or logistic partner,
              who becomes an IOR on the exporter’s behalf.
            </li>
          </ol>
        </div>
        <div className="modal-footer">
          <button className="accordion" onClick={toggleDocuments}>
            Validity of IOR{" "}
            {isDocumentsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isDocumentsOpen && (
            <div className="accordion-content">
              <p>
                An IOR number is valid till it’s cancelled. However, a running
                bond is required to be renewed on an annual basis. An IOR is
                required for every shipment meeting the specified conditions
              </p>
            </div>
          )}

          <button className="accordion" onClick={toggleBenefitsWindow}>
            Benefits of IOR{" "}
            {benefitsWindow ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {benefitsWindow && (
            <div className="accordion-content">
              <ul>
                <li>a. An IOR enables the import of shipments in USA in the absence of an actual importer</li>
                <li>b. IOR is needed to file regulatory documents with authorities for importing specific categories in USA</li>
              </ul>
            </div>
          )}

          <button className="accordion" onClick={toggleLinks}>
            Links for reference{" "}
            {isLinksOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isLinksOpen && (
            <div className="accordion-content">
                <ul>
                    <li>
                        <a
                        href="https://cbpcomplaints.cbp.gov/s/article/Article-215?language=en_US&name=Article-215#:~:text=In%20general%2C%20an%20informal%20entry,both%20personal %20and%20commercial%20importations"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Informal Entry Information and Guidelines
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.cbp.gov/sites/default/files/documents/3530-002a_3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        CBP Form 3530-002A: Informal Entry Declaration
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.cbp.gov/trade/basic-import-export/importer-exporter-tips"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        U.S. Customs and Border Protection: Importer and Exporter Tips
                        </a>
                    </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
