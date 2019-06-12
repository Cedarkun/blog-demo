import React, {Component} from 'react';
import './style1.css';
import './style2.css';

export default class ArticlePost extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        let pattern=this.props.index%2==0?"bg-cog":"bg-circuit";
        let time= new Date(+new Date(this.props.time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
        return (
        <article className="post">
            <section className={"post-excerpt"+" "+pattern}>
                <div className="post-info">
                    <div className="info-wrap">
                        <h2 className="post-title">{this.props.title}</h2>
                        <p className="post-lead">{unescape(this.props.abstract)}</p>
                        <div className='post-lead-hide'></div>
                        <div className="post-meta">
                            <span className="post-time">{time}</span>
                            <span className="post-tag">{this.props.tag}</span>
                        </div>
                    </div>
                </div>
            </section>
            
        </article>
        );
    }
}