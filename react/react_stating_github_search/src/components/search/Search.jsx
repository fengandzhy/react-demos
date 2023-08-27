import React, {Component} from 'react';
import axios from "axios";
import PropTypes from "prop-types";

export default class Search extends Component {
    myRef1 = React.createRef();
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        updateState: PropTypes.func.isRequired
    }
    getResponse = () => {
        const {myRef1: {current: {value: keyWord}}} = this // 注意这里的解构赋值
        this.props.updateState({isFirst: false, isLoading: true});
        axios.get(`/api/search/users?q=${keyWord}`).then( // 注意这里的引号
            response => {
                this.props.updateState({isLoading: false});
                this.props.searchUsers({
                    users: response.data.items
                });
            },
            error => {
                this.props.updateState({isLoading: false, err: error.message});
            }
        );
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={this.myRef1} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.getResponse}>Search</button>
                </div>
            </section>
        );
    }
}