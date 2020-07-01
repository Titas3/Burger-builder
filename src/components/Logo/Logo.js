import React from 'react';
import BurgerLogo from '../../assets/Images/burger-logo.png';
import './Logo.css';

const logo = props => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={BurgerLogo} alt="my burger" />
  </div>
);

export default logo;
