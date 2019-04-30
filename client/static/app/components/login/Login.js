import React, {Component, PropTypes} from 'react';
import {Input, Form, Icon, Button} from 'antd'
const FormItem = Form.Item;


export default class Header extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div className="bg" style="backgroud-color:lightcoral">
            <form  onSubmit={this.handleLogin}>
                <input></input>
            </form>
        </div>
      );
    }
}