// src/components/GSTCode.js
import React,{ useState } from 'react';
import './GSTCode.css';
import { RiAddLine } from 'react-icons/ri';
import { FaAngleRight } from "react-icons/fa6";
import Modal from './GSTModal';

const GSTCode = ({ isMenuOpen }) => {

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

      <h1 className="title">GST LUT</h1>

      <section className="overview-section">
        <h2>Overview:</h2>
        <p>
        Letter of Undertaking (LUT) is a document that exporters can file to export goods or services without having to pay IGST. Exporters can generate a LUT on the GST portal and avail the benefits of zero rated turnover. Exporters can generate LUT once every financial year and provide it to their logistic partner for the shipping bill generation. Without a LUT, exporters need to pay IGST on their exports and seek refund during filing of their returns.
        </p>
      </section>

      <section className="benefits-section">
        <h2>Benefits of obtaining a LUT:</h2>
        <ul>
          <li>a. A LUT enables exporters to export without payment of taxes & thus avoid the hassles of claiming tax refunds.</li>
          <li>b. With a LUT, exporters can apply for a refund of the GST paid on procurement of their products (for exporting) through the unutilized GST credit in their ledger.</li>
        </ul>
      </section>

      <section className="validity-section">
        <h2>Validity of LUT:</h2>
        <p>
          LUT is valid for a financial year
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

export default GSTCode;
