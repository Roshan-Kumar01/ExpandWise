import React,{ useState } from 'react';
import './ShippingDoc.css';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import ShippingRequirementsModal from './ShippingRequirementsModal';
import ShippingTemplatesModal from './ShippingTemplatesModal';
import PartneredCarriersModal from './PartneredCarriersModal';

const ShippingDoc = ({isMenuOpen}) => {
    const [isReqModalOpen, setIsReqModalOpen] = useState(false);
    const [isTempModalOpen, setIsTempModalOpen] = useState(false);
    const [isCarrierModalOpen, setIsCarrierModalOpen] = useState(false);
  return (
    <div className={`shipping-documentation right-component ${
        isMenuOpen
          ? "right-component--with-sidebar"
          : "right-component--expanded"
      }`}>
      <h1 className="title">Shipping Documentation</h1>
      {/* <div className="breadcrumb">
        <Link to="/exports-compliance">Exports Compliance</Link> <span>›</span> Shipping Documentation
      </div> */}

      <img
        src="https://d37d9scfo5x8dm.cloudfront.net/Shipping_Workflow_Desktop.af1f0c02.webp"
        alt="Shipping Workflow"
        className="workflow-image"
      />

      <p className="info-text">
        Generally, there are 2 modes of clearance of exporting shipments:
      </p>

      <div className="modes-container">
        <div className="mode-card">
          <img
            src="https://d37d9scfo5x8dm.cloudfront.net/CourierMode.e5f7c8f4.webp"
            alt="Courier Mode"
            className="mode-image"
          />
          <h2>Courier mode</h2>
          <p>
            Exporters can choose this mode if their shipment value is up to INR 5 Lakhs. Export incentives
            (such as duty drawbacks, EPCG) are not applicable for exports made via Courier mode. The mandatory
            documents for shipping via Courier mode are Commercial invoice, Packing list, and Shipper Letter
            of Instruction.
          </p>
        </div>

        <div className="mode-card">
          <img
            src="https://d37d9scfo5x8dm.cloudfront.net/CargoMode.80897e8e.webp"
            alt="Cargo Mode"
            className="mode-image"
          />
          <h2>Cargo mode</h2>
          <p>
            There is no limit on the shipment value for choosing the Cargo mode. Exporters can claim export
            related benefits if they ship via Cargo mode. The mandatory documents for shipping via Cargo mode
            are Commercial invoice, Packing list, Export Value Declaration, and Shipper Letter of Instruction.
          </p>
        </div>
      </div>

      <div className="action-buttons">
        <button className="button" onClick={() => setIsReqModalOpen(true)}>
          View shipping requirements <FiChevronRight className="icon" />
        </button>
        <ShippingRequirementsModal isOpen={isReqModalOpen} onClose={() => setIsReqModalOpen(false)} />

        <button className="button" onClick={() => setIsTempModalOpen(true)}>
          Download shipping templates <FiChevronRight className="icon" />
        </button>
        <ShippingTemplatesModal isOpen={isTempModalOpen} onClose={() => setIsTempModalOpen(false)} />

        <button className="button" onClick={() => setIsCarrierModalOpen(true)}>
          Ship with ExpandWise partnered carriers <FiChevronRight className="icon" />
        </button>
        <PartneredCarriersModal isOpen={isCarrierModalOpen} onClose={() => setIsCarrierModalOpen(false)} />

        <button className="button">
          Request assistance <FiChevronRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ShippingDoc;
