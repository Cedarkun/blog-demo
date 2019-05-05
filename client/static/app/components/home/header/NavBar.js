import React, {Component, PropTypes} from 'react';
import NavItem from './NavItem'

export default class NavBar extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      let items=[{itemName:'HOMEaaa'},{itemName:'PHOTOS'},{itemName:'ABOUTME'}];
      return (
       <nav className="header-navbar">
            <ul className="nav-menu">
              {items.map((item, index) => (
                <NavItem key={index} {...item}  />
              ))}
            </ul>
        </nav>
      );
    }
}
