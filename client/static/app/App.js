import React, {Component, PropTypes} from 'react';
import Header from './Header'
import Footer from './Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  menuItemLight(){
    let curItem;

  }

  render() {
    return(
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
