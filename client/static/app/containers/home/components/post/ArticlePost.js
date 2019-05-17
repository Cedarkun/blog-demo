import React, {Component} from 'react';
import './style1.css';
import './style2.css';

export default class ArticlePost extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        let pattern=this.props.index%2==0?"bg-cog":"bg-circuit";
        return (
        <article className="post">
            <section className={"post-excerpt"+" "+pattern}>
                <div className="post-info">
                    <div className="info-wrap">
                        <h2 className="post-title">{this.props.title}</h2>
                        <p className="post-lead">{unescape(this.props.abstract)}</p>
                        <div className="post-meta">
                            <span className="post-time">2019.3.21</span>
                            <span className="post-tag">测试</span>
                        </div>
                    </div>
                </div>
            </section>
        </article>
        );
    }
}