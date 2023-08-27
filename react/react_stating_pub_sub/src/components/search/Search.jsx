import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";


export default class Search extends Component {
    myRef1 = React.createRef();
    getResponse = () => {
        const {myRef1: {current: {value: keyWord}}} = this // 注意这里的解构赋值
        PubSub.publish('pub-sub', {isFirst: false, isLoading: true});
        axios.get(`/api/search/users?q=${keyWord}`).then( // 注意这里的引号
            response => {
                PubSub.publish('pub-sub', {isLoading: false, users: response.data.items});
            },
            error => {
                PubSub.publish('pub-sub', {isLoading: false, err: error.message});
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