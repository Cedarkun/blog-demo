import React, {Component, PropTypes} from 'react';

class Header extends React.Component {
    render() {
      return (
        <header class="header">
          <section  class="header-anchor">
            <div class="header-titlebar">
              <div class="header-search">
                <div class="search-blank">
                  <input type="text" class="ipt" maxlength="50" autocomplete="off" placeholder="search"></input>
                  <span class="search-btn"></span>
                </div>
              </div>
              <div class="header-logo"><h3>Cedar Blog</h3></div>
              <div class="header-userinfo">
                <div class="user-portrait">
                  <a href="#"></a>
                </div>
                <ul class="social-links">
                  <li class="qq">
                    <a href="#"></a>
                  </li>
                  <li class="email">
                    <a href="#"></a>
                  </li>
                  <li class="github">
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <nav class="header-navbar">
              <ul class="nav-menu">
                <li class="menu-item"><a href="#">主页</a></li>
                <li class="menu-item"><a href="#">学习</a></li>
                <li class="menu-item"><a href="#">日记</a></li>
                <li class="menu-item"><a href="#">相册</a></li>
                <li class="menu-item"><a href="#">关于我</a></li>
              </ul>
            </nav>
          </section>
          <div class="banner">
            <h2>Welcome to my blog</h2>
          </div>
        </header>
      );
    }
}
