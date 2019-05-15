import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions as frontActions} from '../../actions/front'
const {requestPosts,requestPostDetail} = frontActions;

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <Menus getArticleList={(tag)=>this.props.get_article_list(tag,1)} categories={this.props.categories} history={this.props.history}/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.requestPostDetail(this.props.navitem,this.props.total);
        this.props.total+=5
    }
}

Home.defaultProps = {
    navitem:'home',
    userInfo: {},
    total: 0,
    posts: []
};

Home.propsTypes = {
    total: PropTypes.number.isRequired,
    posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return{
        total: state.front.total,
        posts: state.front.posts
    }
}
function mapDispatchToProps(dispatch) {
    return{
        requestPosts:bindActionCreators(requestPosts,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)