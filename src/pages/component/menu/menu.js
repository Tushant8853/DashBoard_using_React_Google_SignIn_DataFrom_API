import React from 'react';
import '../../../css/menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-box">
        <div className="menu">
          <h2 className="menu-heading">Menu</h2>
          <ul className="menu-options">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
