import React, {Component} from 'react';
import './Item.css';
import PropTypes from "prop-types";

export default class Item extends Component {
    state = {mouse: false}
    static propTypes = {
        delTodo: PropTypes.func.isRequired,
        changeTodoStatus: PropTypes.func.isRequired
    }

    mouseHandler(flag) {
        this.setState({mouse: flag});
    }

    checkHandler(id, event) {
        this.props.changeTodoStatus(id, event.target.checked);
    }

    render() {
        const todo = this.props.todo;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : '#FFF'}} onMouseLeave={this.mouseHandler.bind(this, false)}
                onMouseEnter={this.mouseHandler.bind(this, true)}>
                <label>
                    <input type="checkbox" checked={todo.status} onChange={this.checkHandler.bind(this, todo.id)}/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: (mouse && todo.status) ? 'block' : 'none'}} onClick={()=>{this.props.delTodo(todo.id)}}>删除</button>
            </li>
        );
    }
}