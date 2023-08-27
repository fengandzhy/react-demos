import React, {Component} from 'react';
import './List.css';
import PropTypes from "prop-types";

export default class List extends Component {
    static propTypes = {
        state: PropTypes.object.isRequired
    }
    render() {
        const {users,isFirst,isLoading,err} = this.props.state;
        let contentDom='';
        isFirst ? contentDom=<h3>欢迎使用，输入关键字，随后点击搜索</h3>:
            isLoading ? contentDom=<h3>Loading......</h3>:
                err ? contentDom=<h3 style={{color:'red'}}>{err}</h3>:
                    contentDom = users.map((user) =>{
                        return (
                            <div key={user.id} className="card">
                                <a rel="noreferrer" href={user.html_url}  target="_blank">
                                    <img alt="head_portrait" src={user.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                            );
                    });

        return (
            <div className="row">
                {
                    // this.props.users.map((user) =>{
                    //     return (
                    //         <div className="card">
                    //             <a rel="noreferrer" href={user.html_url}  target="_blank">
                    //                 <img alt="head_portrait" src={user.avatar_url} style={{width: '100px'}}/>
                    //             </a>
                    //             <p className="card-text">{user.login}</p>
                    //         </div>
                    //     );
                    // }) // 注意这里是表达式不是语句, 因此这里不需要分号
                    contentDom
                }

            </div>
        );
    }
}