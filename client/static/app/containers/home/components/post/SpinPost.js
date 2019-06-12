import React, {Component} from 'react';
import {Spin} from 'antd';


export default class ArticlePost extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Spin tip="憋大招中..." ></Spin>
            </div>
            
        );
    }
}