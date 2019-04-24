import React from 'react'

export default class NavItem extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
       <li onClick={this.props.click}><a href="#">{this.props.text}</a></li>
      );
    }
}

export default Todo