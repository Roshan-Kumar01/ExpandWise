import React from 'react';
import './ShippingRequirementsModal.css';
import { FiX } from 'react-icons/fi';

const ShippingRequirementsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Shipping Requirements</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>
        <p className="modal-subtitle">
          Details on the mandatory shipping documents for custom clearance:
        </p>

        <table className="requirements-table">
          <thead>
            <tr>
              <th>Courier mode</th>
              <th>Cargo mode</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Commercial Invoice</td>
              <td>Commercial Invoice</td>
              <td>
                The commercial invoice provides details of the items in the shipment, including a full description of the goods, HS code, quantity, value, country of origin, and the name and address of the exporter, manufacturer, and importer.
              </td>
            </tr>
            <tr>
              <td>Packing List</td>
              <td>Packing List</td>
              <td>
                An export packing list includes details of the goods, marks, numbers, quantity, weight, and types of packages (e.g., boxes, crates) included in each shipment.
              </td>
            </tr>
            <tr>
              <td>Shipper Letter of Instruction</td>
              <td>Shipper Letter of Instruction</td>
              <td>
                The Shipper Letter of Instruction (SLI) provides transportation and documentation instructions to logistics partners for the transport and filing of custom-related documents.
              </td>
            </tr>
            <tr>
              <td>Not applicable</td>
              <td>Export Value Declaration</td>
              <td>
                The Export Value Declaration (EVD) provides information about the goods being shipped, including type, number, and value.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="extra-info">
          To understand more about the customs process, please refer to the <a href="https://old.cbic.gov.in/htdocs-cbec/deptt_offcr/Customs_Manual_2023.pdf">Custom manual</a>.
        </p>
        <p className="extra-info">
          Depending on the product being exported, additional documents may be required by your logistics partner. Examples include:
        </p>
        <ul className="extra-list">
          <li>
            <strong>Product specific documents:</strong> Certain products have specific requirements to be exported from India to the USA. Find the requirements specific to your products <a href="/product-documentation">here</a>.
          </li>
          <li>
            <strong>Importer on Record (IOR):</strong> An IOR may be required for importing products under certain conditions into the USA. Find more details on IOR <a href="/ior">here</a>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShippingRequirementsModal;
