import React from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";

import './App.css';

class App extends React.Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', status: false},
            {id: '002', name: '睡觉', status: false},
            {id: '003', name: '编码', status: false}
        ]
    }
    getValue = (val) => {
        this.setState({todos: [val, ...this.state.todos]});
    }
    changeTodoStatus = (id, status) => {
        const {todos} = this.state;
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, status} // 注意这里的写法
            } else {
                return todo;
            }
        });
        this.setState({todos: updatedTodos});
    }

    delTodo = (id) => {
        const {todos} = this.state;
        const updatedTodos = todos.filter((todo, index) => {
            return todo.id !== id;
        });
        this.setState({todos: updatedTodos});
    }

    unCheckAll = (unCheckedTodos) => {
        this.setState({todos: unCheckedTodos});
    }

    delFinished = (finishedTodos) => {
        this.setState({todos: finishedTodos});
    }

    render() {
        const {todos} = this.state;

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header getValue={this.getValue}/>
                    <List todos={todos} changeTodoStatus={this.changeTodoStatus} delTodo={this.delTodo}/>
                    <Footer todos={todos} unCheckAll={this.unCheckAll} delFinished={this.delFinished}/>
                </div>
            </div>
        );
    }
}

export default App;