import React, {Component, PropTypes} from 'react';
import './style.css';

export default class Footer extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <footer className="footer">
            <div className="bg-copyright"></div>
            <p className="copyright">Cedar的独立博客</p>
        </footer>
      );
    }
}