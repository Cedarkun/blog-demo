import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as frontActions} from '../../actions/front';
import ArticlePost from './components/post/ArticlePost';
import SpinPost from './components/post/SpinPost'
const {requestPosts,requestPostDetail} = frontActions;
import './style.css';



class Home extends Component{
    constructor(props){
        super(props);
    };

    //节流
    throttle(method,delay,duration){
        let timer=null;
        let begin=new Date();    
        let callHandle=function(){                
            let context=this, args=arguments;
            let current=new Date();        
            clearTimeout(timer);
            if(current-begin>=duration){
                method.apply(context,args);
                begin=current;
            }else{
                timer=setTimeout(function(){
                    method.apply(context,args);
                },delay);
            }
        }.bind(this);
        return callHandle();
    }

    update()
    {
        let pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
        let viewportHeight = window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight || 0;//视窗的高度
        let scrollHeight = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop || 0;//滚动条纵坐标位置
        let loadHeight = viewportHeight * 0.1;

        if(pageHeight - viewportHeight - scrollHeight <loadHeight)  
        {
            this.props.requestPosts(this.props.navitem,this.props.curTag,this.props.total)
        }  
         
    }

    render(){       
        let posts=this.props.posts.concat();
        if(this.props.update)posts.push("spin");//若还没获取完post
        let onePost = posts.map((post,index)=>{
            if(post==="spin") return(<SpinPost key={-1}/>)
            else return( 
                <ArticlePost key={post.id} 
                    title={post.title} 
                    abstract={post.abstract} 
                    tag={post.tag} 
                    time={post.time}
                    index={index}
                />
            );
        })
        
        return(
            <div id="body">
                {onePost}          
            </div>
            
        )
    }

    //组件渲染之后调用，只调用一次
    componentDidMount() {
        console.log('Home componentDidMount');
        this.props.requestPosts(this.props.navitem,this.props.curTag,this.props.total);
        let scrollHandle= this.throttle.bind(this,this.update,50,100);
        window.onscroll=scrollHandle;
    }
    componentDidUpdate(){
        console.log('Home componentDidUpdate'+'  '+this.props.update);
        if(!this.props.update)
        {
            window.onscroll=null;
        }
        else if(this.props.update && !window.onscroll)
        {
            let scrollHandle= this.throttle.bind(this,this.update,50,100);
            window.onscroll=scrollHandle;
        }
    }
}

Home.defaultProps = {
    navitem:'home',
    curTag:'',
    userInfo: {},
    total: 0,
    posts: [],
    update:true,
};

Home.propsTypes = {
    curTag:PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    posts: PropTypes.array.isRequired,
    update:PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    //let tmp=!(state.fetch.msg.content==='error'||state.fetch.msg.content==='end');
    //console.log(tmp);
    return{
        curTag:state.front.curTag,
        total: state.front.total,
        posts: state.front.posts,
        update:!(state.fetch.msg.content==='get posts error'||state.fetch.msg.content==='get posts end'),
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