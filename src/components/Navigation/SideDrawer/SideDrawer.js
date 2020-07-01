import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = props => {
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className="SideDrawer Close">
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
