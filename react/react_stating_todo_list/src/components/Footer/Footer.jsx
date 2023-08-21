import React, {Component} from 'react';
import './Footer.css'
import PropTypes from "prop-types";

export default class Footer extends Component {


    static propTypes = {
        todos: PropTypes.array.isRequired,
        delFinished: PropTypes.func.isRequired,
        unCheckAll: PropTypes.func.isRequired
    }

    unCheckAll = (todos) => {
        const unCheckTodo = todos.map((todo) => {
            if (todo.status) {
                return {...todo, status: false};
            } else {
                return todo;
            }
        });
        this.props.unCheckAll(unCheckTodo);
    }

    delAllFinished = (todos) =>{
        const allFinishedTodo = todos.map((todo) => {
            if (!todo.status) {
                return todo;
            }
        });
        this.props.delFinished(allFinishedTodo);
    }

    render() {
        const {todos} = this.props;
        const all = todos.length;

        const completed = todos.reduce((pre, todo) => {
            return pre + (todo.status ? 1 : 0); // 注意这里的三目运算符不能写成 pre +todo.status? 1:0 就等于洗成 (pre + todo.status)? 1:0
        }, 0);
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={all === completed && all !== 0} disabled={all === 0}
                           onChange={this.unCheckAll.bind(this, todos)}/>
                </label>
                <span>
                    <span>已完成{completed}</span> / 全部{all}
                </span>
                <button className="btn btn-danger" onClick={this.delAllFinished.bind(this,todos)}>清除已完成任务</button>
            </div>
        );
    }
}