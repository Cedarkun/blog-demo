import React, {Component, PropTypes} from 'react';
import NavItem from './NavItem'

export default class NavBar extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      let items=[{itemName:"HOME"},{itemName:"PHOTOS"},{itemName:"ABOUTME"}];
      console.log(this)
      //let curPath=this.props;//match.path;
      //curPath = curPath.match(/[0-9A-Za-z]+/)[0].toUpperCase();
      /*
      for(let item of items) {  
        if(item.itemName===curPath){item.current=1;} 
      };  
      */
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
