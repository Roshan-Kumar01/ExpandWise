// src/components/IECCode.js
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './IECCode.css';
import { RiAddLine } from 'react-icons/ri';
import { FaAngleRight } from "react-icons/fa6";
import Modal from './IECModal';

const IECCode = ({ isMenuOpen }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`iec-code-page right-component ${isMenuOpen ? 'right-component--with-sidebar' : 'right-component--expanded'}`}>
      {/* <div className="faded-number">1</div> Faded "1" in the background */}
      
      {/* <div className="breadcrumb">
        <Link to="/exports-compliance">Exports Compliance</Link> {'>'} 
        <Link to="/exports-registration"> Exports Registration </Link> {'>'} IEC Code
      </div> */}

      <h1 className="title">IEC Code</h1>

      <section className="overview-section">
        <h2>Overview:</h2>
        <p>
          The Importer-Exporter Code (IEC) is a key business identification number and is mandatory for exporting or importing in India. The IEC code is allotted by the Directorate General of Foreign Trade (DGFT) and should be obtained before making any import or export. It can be applied online at the <a href="https://dgft.gov.in" target="_blank" rel="noopener noreferrer">DGFT website</a>.
        </p>
      </section>

      <section className="benefits-section">
        <h2>Benefits of obtaining an IEC code:</h2>
        <ul>
          <li>a. An IEC code enables an exporter to import or export in India</li>
          <li>b. Exporters need an IEC code to avail export benefits under the Foreign Trade policy schemes</li>
        </ul>
      </section>

      <section className="validity-section">
        <h2>Validity of an IEC code:</h2>
        <p>
          IEC is valid until canceled. However, there has been a recent change in regulations mandating that the IEC code is required to be updated every year.
        </p>
      </section>

      <div className="action-buttons">
        <button className="button button--self-registration open-modal-button" onClick={openModal}>
          Self registration steps <FaAngleRight className="icon" />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <button className="button button--request-assistance">
          Request assistance <RiAddLine className="icon" />
        </button>
      </div>
    </div>
  );
};

export default IECCode;
