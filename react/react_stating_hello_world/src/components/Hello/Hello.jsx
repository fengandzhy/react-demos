import React, {Component} from 'react';
import './Hello.css';
export default class Hello extends Component{
    /**
     * 这里的className 两个组件不能同名, 都叫title的话, 那样会似的样式混乱, Welcome.css 里的title 也会弄到 Hello组件上,
     * 因为它们最后都在一个地方引入的
     *
     * */
    render(){
        return(
            <h2 className='hello_title'>Hello,React</h2>
        );
    }
}