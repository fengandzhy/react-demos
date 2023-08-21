import React, {Component} from 'react';
import './Item.css';
import PropTypes from "prop-types";

export default class Item extends Component {
    state = {mouse: false}
    static propTypes = {
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
                    <input type="checkbox" defaultChecked={todo.done} onChange={this.checkHandler.bind(this, todo.id)}/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }
}