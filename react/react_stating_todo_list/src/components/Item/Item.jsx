import React, {Component} from 'react';
import './Item.css';
export default class Item extends Component{
    render(){
        const todo = this.props.todo;
        return(
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
        );
    }
}