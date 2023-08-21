
import React from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";

import './App.css';
class App extends React.Component{
    state={todos:[
            {id:'001',name:'吃饭',status:false},
            {id:'002',name:'睡觉',status:false},
            {id:'003',name:'编码',status:false}
        ]}
    getValue=(val)=>{
        this.setState({todos:[val,...this.state.todos]});
    }
    render(){
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header getValue={this.getValue}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;