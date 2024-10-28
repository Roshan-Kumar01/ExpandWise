// src/components/ADCode.js
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './ADCode.css';
import { RiAddLine } from 'react-icons/ri';
import { FaAngleRight } from "react-icons/fa6";
import Modal from './ADModal';

const ADCode = ({ isMenuOpen }) => {

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

      <h1 className="title">AD Code</h1>

      <section className="overview-section">
        <h2>Overview:</h2>
        <p>
          Authorized dealer (AD) code is a 14 digit unique code allotted to banks dealing in foreign currency by RBI. Exporters are required to obtain an AD code letter from the bank in which their business has a current account. Further, the AD code letter needs to be registered at the Customs port from where the goods will be exported. AD Code registration helps banks and Custom authorities to keep a track on the export transactions.
        </p>
      </section>

      <section className="benefits-section">
        <h2>Benefits of AD code Registration:</h2>
        <ul>
          <li>a. An AD code is mandatory for generation of the shipping bill and thus necessary for Custom clearance of the shipment.</li>
          <li>b. An AD Code is required to avail any export related government benefits in India.</li>
        </ul>
      </section>

      <section className="validity-section">
        <h2>Validity of an AD code:</h2>
        <p>
          An AD Code is valid with Customs authority for lifetime. However, any change in the banking details of the exporter will need an update to AD Code registration with Custom authorities.
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

export default ADCode;
