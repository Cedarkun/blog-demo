import React from 'react'

export default class NavItem extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      let name="menu-item";
      if(this.props.current) name+=" current"
      return (
       <li className="menu-item"><a href="#">{this.props.itemName}</a></li>
      );
    }
}