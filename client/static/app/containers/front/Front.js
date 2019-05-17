import React, {Component, PropTypes} from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import TitleBar from '../components/header/TitleBar';
import NavBar from '../components/header/NavBar';
import Banner from '../components/header/Banner';
import Home from '../home/Home';
import '../components/header/style.css';

class Front extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <header className="header">
                    <div  className="header-anchor">
                        <TitleBar />
                        <NavBar />
                    </div>
                    <Banner />
                </header>

                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route  path="/" component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            
        )
    }

}
/*
function mapStateToProps(state) {
    return{
        categories:state.admin.tags,
        userInfo: state.globalState.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return{
        get_all_tags:bindActionCreators(get_all_tags,dispatch),
        get_article_list:bindActionCreators(get_article_list,dispatch),
        login: bindActionCreators(IndexActions.get_login, dispatch),
        register: bindActionCreators(IndexActions.get_register, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Front)
*/

export default connect()(Front)