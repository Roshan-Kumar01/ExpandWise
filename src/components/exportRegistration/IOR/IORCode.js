// src/components/IORCode.js
import React, { useState } from "react";
import "./IORCode.css";
import { RiAddLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import Modal from "./IORModal";

const IORCode = ({ isMenuOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`iec-code-page right-component ${
        isMenuOpen
          ? "right-component--with-sidebar"
          : "right-component--expanded"
      }`}
    >
      {/* <div className="faded-number">1</div> Faded "1" in the background */}

      {/* <div className="breadcrumb">
        <Link to="/exports-compliance">Exports Compliance</Link> {'>'} 
        <Link to="/exports-registration"> Exports Registration </Link> {'>'} IEC Code
      </div> */}

      <h1 className="title">IOR</h1>

      <section className="overview-section">
        <h2>Overview:</h2>
        <p>
          An Importer on Record (IOR) is needed for importing products (under
          certain conditions, detailed below) into USA. An IOR is responsible
          for (1) ensuring the imported products comply with the local laws and
          regulations, (2) paying and filing the duties, taxes and documents
          associated with the imports.
        </p>
      </section>

      {/* <section className="benefits-section">
        <h2>Benefits of obtaining an IEC code:</h2>
        <ul>
          <li>a. An IEC code enables an exporter to import or export in India</li>
          <li>b. Exporters need an IEC code to avail export benefits under the Foreign Trade policy schemes</li>
        </ul>
      </section> */}

      <section className="validity-section">
        <h2>Conditions where an IOR is needed:</h2>
        <p>
          CBP (Custom & Border Protection) authority permits an informal entry
          (i.e no import declaration filing needed) for shipments valuing below
          USD 2,500. Hence, shipments with value below USD 2,500 do not require
          an IOR generally. However, if the shipment has products of regulated
          categories, the importer details will be required and thus an IOR will
          be needed. This applies to all regulated category shipments
          irrespective of the value of the shipment. A few examples of regulated
          categories are food, dietary supplements, products with chemicals,
          wooden articles, toys for children below 12 years age, etc.
        </p>
      </section>

      <div className="action-buttons">
        <button
          className="button button--self-registration open-modal-button"
          onClick={openModal}
        >
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

export default IORCode;
