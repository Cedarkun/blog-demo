import React, {Component, PropTypes} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Front from './front/Front';
import Login from '../components/login/Login';

//BrowserRouter
//HashRouter
class App extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>                       
                        <Route  exact path="/" component={Front}/>
                        <Route  path="/login" component={Login}/>                                            
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }

}

export default connect()(App)
/*
function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postsByNavitem: bindActionCreators(postsByNavitem, dispatch)
    }
}


export default connect(mapStateToProps,
    mapDispatchToProps)(App)
*/