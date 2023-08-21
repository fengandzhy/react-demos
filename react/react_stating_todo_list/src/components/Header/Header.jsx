import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import './Header.css'
export default class Header extends Component{

    static propTypes = {
        getValue:PropTypes.func.isRequired
    }

    keyUp=(e)=>{
        if(e.keyCode === 13){
            const todoObj = {id:nanoid(),name:e.target.value,done:false}
            this.props.getValue(todoObj);
            e.target.value = '';
        }
    }

    render(){
        return(
            <div className="todo-header">
                <input type="text" onKeyUp={this.keyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}