import React from 'react'

export default class NavItem extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
       <li><a href="#">{this.props.itemName}</a></li>
      );
    }
}