import React, { useState } from 'react';
import { 
  FiChevronRight, 
  FiPlus, 
  FiMinus, 
  FiFileText, 
  FiHelpCircle 
} from 'react-icons/fi';
import './PaymentReconciliation.css';

const PaymentReconciliation = ({isMenuOpen}) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={`payment-container right-component ${isMenuOpen ? 'right-component--with-sidebar' : 'right-component--expanded'}`}>
      {/* Header and Navigation */}
      <div className="header-section">
        <h1>Payment Reconciliation</h1>
        {/* <div className="breadcrumb">
          <span className="link">Exports Compliance</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span>Payment Reconciliation</span>
        </div> */}
      </div>

      {/* Workflow Diagram */}
      <div className="workflow-section">
        <img 
          src="https://d37d9scfo5x8dm.cloudfront.net/Payment_Workflow_Desktop.8d7861d2.webp"
          alt="Payment Reconciliation Workflow"
        />
      </div>

      {/* Main Content */}
      <div className="content-section">
        <p className="intro-text">
          Export in India is subject to several compliances as stipulated under the Foreign Exchange Management Act 1999, Foreign Exchange Management (Current Account Transactions) Rules, 2000, and the Foreign Exchange Management (Export of Goods and Services) Regulations, 2015. Such compliances are required to be adhered by every exporter in India.
        </p>

        {/* Repatriation Section */}
        <div className="repatriation-section">
          <h2>Repatriation and Realization of Export proceeds:</h2>
          <p>
            Exporters are required to declare the value of the goods to be exported. In case it is not possible to determine the full value of the goods at the time of export, then the fair market value of the goods to be exported (at the time of export) should be ascertained by the exporter.
          </p>

          <p>
            Exporters are required to adhere to the following time limits for realization and repatriation of goods and services:
          </p>

          <ul className="timeline-list">
            <li>Timeline for repatriation and realization of goods is typically 9 months from the date of exports.</li>
            <li>
              However, the above timeline would be decided by RBI on a case to case basis. The RBI stipulates these timelines:
              <ul>
                <li>When goods are exported to a warehouse established outside India (with the permission of RBI), the value of the exported goods should be paid as soon as it is realized to the authorized dealer bank, which should not be more that 15 months from the date of shipment (unless otherwise specified by RBI in consultation with the Government of India).</li>
                <li>If the period is extended, then an application must be made to the AD Bank for a sufficient and reasonable cause shown.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Certificates Section */}
        <div className="certificates-section">
          <h2>Proof of payment received:</h2>
          <p>
            After receiving all payments of a shipping bill, exporters need to submit their export documents, eFIRC to their bank for closing their open entries in EDPMS and obtaining their eBRC.
          </p>

          {/* eFIRC Section */}
          <div className="dropdown-section">
            <button 
              className={`dropdown-button ${expandedSection === 'efirc' ? 'active' : ''}`}
              onClick={() => toggleSection('efirc')}
            >
              <span className="dropdown-title">
                <span>1. eFIRC (electronic Foreign Inward Remittance Certificate)</span>
              </span>
              {expandedSection === 'efirc' ? <FiMinus /> : <FiPlus />}
            </button>
            {expandedSection === 'efirc' && (
              <div className="dropdown-content">
                Banks need to report all inward remittances under EDPMS received against export of goods/software. When the exporter proceeds for export of goods are received by a bank other than the one through which documents are submitted, e-FIRC is required for connecting the two. Here, the banks that received the payment would issue electronic eFIRC to EDPMS at specific request of exporter.
              </div>
            )}
          </div>

          {/* eBRC Section */}
          <div className="dropdown-section">
            <button 
              className={`dropdown-button ${expandedSection === 'ebrc' ? 'active' : ''}`}
              onClick={() => toggleSection('ebrc')}
            >
              <span className="dropdown-title">
                <span>2. eBRC (electronic Bank Realization Certificate)</span>
              </span>
              {expandedSection === 'ebrc' ? <FiMinus /> : <FiPlus />}
            </button>
            {expandedSection === 'ebrc' && (
              <div className="dropdown-content">
                <p>
                  Once all the payments against a shipping bill are received, exporter can request their bank to close the entry in EDPMS and obtain an eBRC. Any firm applying for benefits under Foreign Trade Policy is required to furnish valid BRC as a proof of realization of payment against exports made.
                </p>
                
                <div className="reference-links">
                  <p>Reference links:</p>
                  <ul>
                    <li><a href="#">RBI Circular</a></li>
                    <li>
                      <a href="#">Guidelines for ExpandWise Payments</a>
                      <span className="note">(You will need an ExpandWise seller account to view this page.)</span>
                    </li>
                    <li><a href="#">Self Certification Link</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="action-buttons">
          <button className="action-button">
            <FiFileText className="button-icon" />
            <span>View payment related FAQ's</span>
            <FiChevronRight className="arrow-icon" />
          </button>
          <button className="action-button">
            <FiHelpCircle className="button-icon" />
            <span>Request assistance</span>
            <FiPlus className="plus-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentReconciliation;