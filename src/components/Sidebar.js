// src/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = ({ isVisible }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }; 

  return (
    <aside className={`sidebar ${isVisible ? 'sidebar--visible' : ''}`}>
      <ul className="sidebar__menu">
      <li onClick={toggleDropdown} className="sidebar__menu-item">
        <Link to="/exports-registration" className="sidebar__menu-link" style={{ textDecoration: 'none' }}>
            Export Registration
            <RiArrowDropDownLine 
            className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} 
            />
        </Link>
      </li>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/iec-code" style={{ textDecoration: 'none' }}>
                IEC Code
              </Link>
            </li>
            <li>
              <Link to="/ad-code" style={{ textDecoration: 'none' }}>
                AD Code
              </Link>
            </li>
            <li>
              <Link to="/gst-lut" style={{ textDecoration: 'none' }}>
                GST LUT
              </Link>
            </li>
            <li>
              <Link to="/ior" style={{ textDecoration: 'none' }}>
                IOR
              </Link>
            </li>
          </ul>
        )}
        <li>Product Documentation</li>
        <li>Shipping Documentation</li>
        <li>Payment Reconciliation</li>
        <li>Tax Documentation</li>
        <li>Global Exports News</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
