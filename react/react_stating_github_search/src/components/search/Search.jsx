import React, {Component} from 'react';
import axios from "axios";
export default class Search extends Component {
    myRef1 = React.createRef();
    getResponse = ()=>{
        const {myRef1:{current:{value: keyWord}}} = this
        console.log(keyWord);
        axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then( // 注意这里的引号
            response =>{console.log('success', response.data);},
            error =>{console.log('error', error);}
        );
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref ={this.myRef1}  type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.getResponse}>Search</button>
                </div>
            </section>
        );
    }
}