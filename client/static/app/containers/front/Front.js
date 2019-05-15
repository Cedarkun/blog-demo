import React, {Component, PropTypes} from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './components/header/Header'

class Front extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route  path="/" component={Header}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}

export default connect()(Front)