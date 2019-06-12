import React, {Component, PropTypes} from 'react';

export default class Banner extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div className="banner">
            <h2>Welcome to my blog</h2>
        </div>
      );
    }
}
