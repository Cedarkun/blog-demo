import React, {Component, PropTypes} from 'react';
import Header from './Header'
import Footer from './Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home:1,
      study:0,
      diary:0,
      photo:0,
      about:0
    }
  }
  menuItemLight(){
    let curItem;
    if(home) curItem=0;
    else if(study) curItem=1;
    else if(diary) curItem=2;
    else if(photo) curItem=3;
    else if(about) curItem=4;
    return curItem;
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
