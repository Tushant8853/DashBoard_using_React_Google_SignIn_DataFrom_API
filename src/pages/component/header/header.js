import React from 'react';
import '../../../css/header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Header;
