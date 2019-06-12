import React, {Component, PropTypes} from 'react';
import { Menu, Dropdown, Icon} from 'antd';

export default class NavBar extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        curTag:"全部"
      }
    }

    handleClick(e){
      if(e.key === this.state.curTag){
          return;
      }else{
        this.props.requestPosts("home",e.key,0);
      }
      this.setState({
        curTag: e.key
      });

  };

    render() {
      let curTag=this.state.curTag;

      let tagMenu=(
        <Menu onClick={this.handleClick.bind(this)}>
        {this.props.tags.map(function(item, index) 
          {
            if(item===curTag)return (<Menu.Item key={item}><a rel="noopener noreferrer" style={{color:"#fb9593"}}>{item}</a></Menu.Item>);
            else return (<Menu.Item key={item}><a rel="noopener noreferrer">{item}</a></Menu.Item>);
          }
        )}
       </Menu>
      );

      
      return (
       <nav className="header-navbar">
            <ul className="nav-menu">
              <Dropdown overlay={tagMenu}>   
                <li className="menu-item">              
                  <a className={"home"===this.props.current?"current ant-dropdown-link":"ant-dropdown-link"} href="#">
                    {"HOME"+" "}                
                    <Icon type="down" />
                  </a>             
                </li>
              </Dropdown> 

              <li className="menu-item">
                <a  className={"photos"===this.props.current?"current":""} href="#">PHOTOS</a>
              </li>

              <li className="menu-item">
                <a  className={"aboutme"===this.props.current?"current":""} href="#">ABOUTME</a>
              </li>

            </ul>
        </nav>
      );

    }

    componentDidMount(){
      console.log('NavBar componentDidMount');
    }
    componentDidUpdate(){
      console.log('NavBarcomponentDidUpdate');
    }
}
