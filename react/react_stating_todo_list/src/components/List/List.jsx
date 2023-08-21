import React, {Component} from 'react';
import './List.css';
import Item from "../Item/Item";
import PropTypes from "prop-types";

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodoStatus: PropTypes.func.isRequired
    }

    render() {
        const todos = this.props.todos;
        const changeTodoStatus = this.props.changeTodoStatus;
        return (
            <ul className="todo-main">
                {
                    /**
                     * 因为forEach里面的函数并没有返回值,所以这里只能用map
                     * */
                    todos.map((todo) => {
                        return <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus}/>
                    })
                }
            </ul>
        );
    }
}