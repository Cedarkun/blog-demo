import React, {Component, PropTypes} from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/header/Header';
import Home from './Home'

class Front extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
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

export default connect()(Front)