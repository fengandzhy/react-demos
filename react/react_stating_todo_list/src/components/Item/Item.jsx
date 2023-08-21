import React, {Component} from 'react';
import './Item.css';
export default class Item extends Component{
    state = {mouse:false}
    mouseHandler(flag){
        this.setState({mouse:flag});
    }
    render(){
        const todo = this.props.todo;
        const {mouse} = this.state;
        return(
            <li style={{backgroundColor: mouse ? '#ddd':'#FFF'}} onMouseLeave={this.mouseHandler.bind(this,false)} onMouseEnter={this.mouseHandler.bind(this,true)}>
                <label>
                    <input type="checkbox"/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse? 'block':'none'}}>删除</button>
            </li>
        );
    }
}