import React, {Component} from 'react';
import './List.css';
import PropTypes from "prop-types";

export default class List extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    }
    render() {
        return (
            <div className="row">
                {
                    this.props.users.map((user) =>{
                        return (
                            <div className="card">
                                <a rel="noreferrer" href={user.html_url}  target="_blank">
                                    <img alt="head_portrait" src={user.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        );
                    }) // 注意这里是表达式不是语句, 因此这里不需要分号
                }

            </div>
        );
    }
}