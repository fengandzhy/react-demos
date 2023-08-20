import React, {Component} from 'react';
import hello from './Hello.module.css';
export default class Hello extends Component{

    /**
     * 样式模块化, 样式文件名中间加入.module, 然后就可以用模块化引入了
     *
     * */
    render(){
        return(
            <h2 className={hello.title}>Hello,React</h2>
        );
    }
}