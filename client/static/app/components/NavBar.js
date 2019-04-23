import React, {Component, PropTypes} from 'react';

export default class Header extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
       <nav className="header-navbar">
            <ul className="nav-menu">
                <li className="menu-item"><a href="#">主页</a></li>
                <li className="menu-item"><a href="#">相册</a></li>
                <li className="menu-item"><a href="#">关于我</a></li>
            </ul>
        </nav>
      );
    }
}
