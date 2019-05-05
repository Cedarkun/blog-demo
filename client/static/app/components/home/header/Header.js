import React, {Component, PropTypes} from 'react';
import TitleBar from './TitleBar';
import NavBar from './NavBar';
import Banner from './Banner';
//import './style.css';

export default class Header extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <header className="header">
          <div  className="header-anchor">
            <TitleBar />
            <NavBar />
          </div>
          <Banner />
        </header>
      );
    }
}
