import React, {Component} from 'react';
import './List.css';
import Item from "../Item/Item";
export default class List extends Component{
    render(){
        const todos = this.props.todos;
        return(
            <ul className="todo-main">
                {
                    /**
                     * 因为forEach里面的函数并没有返回值,所以这里只能用map
                     * */
                    todos.map((todo) => {
                        return <Item key={todo.id} todo={todo}/>
                    })
                };
            </ul>
        );
    }
}