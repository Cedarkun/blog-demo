import React, {Component, PropTypes} from 'react';

export default class Header extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div className="header-titlebar">
            <div className="header-search">
                <div className="search-blank">
                    <input type="text" className="ipt" maxLength="50" autoComplete="off" placeholder="search"></input>
                    <span className="search-btn"></span>
                </div>
            </div>
            <div className="header-logo"><h3>Cedar Blog</h3></div>
            <div className="header-userinfo">
                <div className="user-portrait">
                    <a href="#"></a>
                </div>
                <ul className="social-links">
                    <li className="qq"><a href="#"></a></li>
                    <li className="email"><a href="#"></a></li>
                    <li className="github"><a href="#"></a></li>
                </ul>
            </div>
      </div>
      );
    }
}
