import React, {Component, PropTypes} from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as frontActions} from '../../actions/front';
import {actions as userInfoActions} from '../../actions/userInfo';
import TitleBar from '../components/header/TitleBar';
import NavBar from '../components/header/NavBar';
import Banner from '../components/header/Banner';
import Login from './login/Login';
import Footer from '../components/footer/Footer';
import Home from '../home/Home';
const {requestTags, requestPosts} = frontActions;
const {requestLogin} = userInfoActions;
import '../components/header/style.css';

class Front extends Component {
    constructor(props) {
        super(props);
        this.state={
            showLoginBox:false 
        };
    }
    handleTitleBarClick(){
        this.setState({showLoginBox:true});
    }
    handleLoginCloseClick(){
        this.setState({showLoginBox:false});
    }
    render() {
        return (
            <div>
                <header className="header">
                    <div  className="header-anchor">
                        <TitleBar handleTitleBarClick={this.props.admin?null:this.handleTitleBarClick.bind(this)} admin={this.props.admin}/>
                        <NavBar requestPosts={(navitem,curTag,total)=>this.props.requestPosts(navitem,curTag,total,true)} current={this.props.navitem} tags={this.props.tags}/>
                    </div>
                    <Banner />
                </header>

                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path={`/:tag`} component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>

                {this.state.showLoginBox?
                    <Login login={this.props.login} handleLoginCloseClick={this.handleLoginCloseClick.bind(this)}/>
                    :<div></div>
                }
                <Footer />
            </div>
            
        )
    }
    componentDidMount(){
        this.props.requestTags();
        console.log('Front componentDidMount');
    }

    componentDidUpdate(){
        if(this.props.admin && this.state.showLoginBox) this.setState({showLoginBox:false});
        console.log('Front componentDidUpdate');
    }
}


function mapStateToProps(state) {
    return{
        navitem:state.front.navitem,
        tags:state.front.tags,
        admin: state.userInfo.admin
    }
}
function mapDispatchToProps(dispatch) {
    return{
        requestTags:bindActionCreators(requestTags,dispatch),
        requestPosts:bindActionCreators(requestPosts,dispatch),
        //get_article_list:bindActionCreators(get_article_list,dispatch),
        login: bindActionCreators(userInfoActions.requestLogin, dispatch),
        //register: bindActionCreators(IndexActions.get_register, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Front)


//export default connect()(Front)