import React, {Component, PropTypes} from 'react';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }

    }
    render() {
      return(
          <footer class="footer">
            <div class="bg-copyright"></div>
            <p class="copyright">Cedar的独立博客</p>
          </footer>          
      );
    }
}