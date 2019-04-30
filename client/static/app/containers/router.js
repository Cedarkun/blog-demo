import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'


class AppIndex extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        //let {isFetching} = this.props;
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route  path="/" component={Home}/>
                        <Route  path="/admin" component={Admin}/>
                        <Route  path="/notfound" component={NotFound}/>
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }

    componentDidMount() {
        this.props.user_auth();
    }

}


function mapStateToProps(state) {
    return {
        notification: state.globalState.msg,
        isFetching: state.globalState.isFetching,
        userInfo: state.globalState.userInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clear_msg: bindActionCreators(clear_msg, dispatch),
        user_auth: bindActionCreators(user_auth, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppIndex)

