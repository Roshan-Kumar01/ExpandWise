import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './TaxDocumentation.css';

const indianContent = {
  title: "GST Treatment on Export Sales:",
  description: "As per Central Board of Indirect taxes & Customs, export of goods from India is treated as GST free subject to certain conditions.",
  subtitle: "Exporters have 2 options in paying GST:",
  sections: [
    {
      id: 'lut',
      title: "1. Exports against Letter of Undertaking (LUT)",
      content: [
        "Exporters registered under GST are required to generate a Letter of Undertaking (LUT) on GST portal for each financial year. Further, they can generate GST free export invoice and provide the acknowledgement number of generated LUT to their logistic partner. The logistic partner shall file the shipping bill against LUT and shall not show any liability of GST on the sale in the shipping bill",
        "Any GST paid on the procurement of goods/ raw material for exports can be claimed as input tax credit by the exporter while filing the GST Returns. Exporters can subsequently explore refund of such GST from GST authorities"
      ]
    },
    {
      id: 'igst',
      title: "2. Exports with payment of IGST (without LUT)",
      content: [
        "Without a LUT, exporters are required to show the GST liability on their export invoice and hence it needs to be declared in the shipping bill (filed by the logistic partner). Exporters can claim their input tax credit for the GST paid on the procurement of raw material and adjust it while paying the GST liability on export sales in their GST returns",
        "After the valid filing of returns and shipping bill, exporters will receive the refund of their GST in full from custom authorities"
      ]
    }
  ]
};

const usaContent = {
  description: "Sellers are responsible for understanding the tax policies and any remittance obligations that apply to their business. This includes registering with any applicable tax authorities, setting up applicable tax calculation settings, and/or filing with a tax authority.",
  sections: [
    "For products destined to a state or jurisdiction where Marketplace Tax Collection laws apply, Amazon will calculate, collect, and remit applicable sales tax automatically. Your business may have certain direct tax reporting obligations, such as federal/state/local income tax or state/local gross receipts tax, based on your sales on Amazon's marketplace, other marketplaces, or direct sales to the US. Amazon is not responsible for reporting those taxes as any direct tax obligation is yours that you must report separately.",
    "For products destined to a state or jurisdiction where Marketplace Tax Collection laws do not apply, Amazon does not automatically calculate, collect, and remit applicable sales tax and any calculation, collection and remittance remains the seller's responsibility. Amazon provides Tax Calculation Services to professional sellers to assist with their sales tax obligation in instances where it is still their obligation to calculate, collect and remit sales tax."
  ],
  note: "Note: Information on this page does not constitute tax, legal, or other professional advice and must not be used as such. You should consult your professional advisers if you have questions."
};

const TaxDocumentation = ({isMenuOpen}) => {
  const [activeTab, setActiveTab] = useState('india');
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <div className={`tax-documentation right-component ${isMenuOpen ? 'right-component--with-sidebar' : 'right-component--expanded'}`}>
      {/* <div className="breadcrumb">
        <span>Exports Compliance</span>
        <span className="separator">›</span>
        <span className="current">Tax Documentation</span>
      </div> */}

      <h1>Tax Documentation</h1>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'india' ? 'active' : ''}`}
          onClick={() => setActiveTab('india')}
        >
          Tax requirements in India
        </button>
        <button
          className={`tab ${activeTab === 'usa' ? 'active' : ''}`}
          onClick={() => setActiveTab('usa')}
        >
          Sales Tax requirements in USA
        </button>
      </div>

      {activeTab === 'india' ? (
        <div className="india-content">
          <h2>{indianContent.title}</h2>
          <p>{indianContent.description}</p>
          <p>{indianContent.subtitle}</p>
          
          {indianContent.sections.map((section) => (
            <div key={section.id} className="accordion">
              <button
                className="accordion-header"
                onClick={() => setExpandedSection(
                  expandedSection === section.id ? null : section.id
                )}
              >
                <span>{section.title}</span>
                {expandedSection === section.id ? (
                  <ChevronUp className="icon" />
                ) : (
                  <ChevronDown className="icon" />
                )}
              </button>
              {expandedSection === section.id && (
                <div className="accordion-content">
                  {section.content.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="usa-content">
          <p>{usaContent.description}</p>
          {usaContent.sections.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
          <p className="note">{usaContent.note}</p>
        </div>
      )}
    </div>
  );
};

export default TaxDocumentation;