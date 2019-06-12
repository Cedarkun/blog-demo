import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import './style.css';

export default class WrapLogin extends Component{
    constructor(props){
        super(props);
    }

    handleCloseClick(e){
        e.preventDefault();
        this.props.handleLoginCloseClick();
    };

    render()
    {
        const LoginBox = Form.create({ name: 'horizontal_login' })(Login);
        const {login} = this.props;
        return(
            <div className="login-bg">
                <div  className="login-form">
                    <LoginBox login={login} />
                    <Icon type="close" className="login-form-close"onClick={this.handleCloseClick.bind(this)}/>
                </div>
            </div>
        );
    }
   
}

class Login extends React.Component {
    constructor(props){
      super(props);
    }
    handleLogin(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.login(values.username, values.password);
          }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleLogin.bind(this)}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                    <Input 
                         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    </Form.Item>
            </Form>
      );
    }
}



