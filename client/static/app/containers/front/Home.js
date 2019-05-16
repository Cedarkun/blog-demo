import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as frontActions} from '../../actions/front';
import ArticlePost from './components/post/ArticlePost';
const {requestPosts,requestPostDetail} = frontActions;
import './style.css';


class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const myId = this.props.myId;
        const onePost = this.props.posts.map((post,index)=>{
            return( <ArticlePost key={post.id} title={post.title} abstract={post.abstract} index={index}/>);
        })
        return(<div id="body">{onePost}</div>)
    }

    //组件渲染之后调用，只调用一次
    componentDidMount() {
        this.props.requestPosts(this.props.navitem,this.props.total);
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