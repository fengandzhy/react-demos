
// require('./index.css');
// import json,{a,b,c,d} from './demos/a';
// console.log(json);
// console.log(a,b,c);
// console.log(d);

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';
import Content from './content';
require('../style/index.css');

let oData = {title:['TitleA','TitleB','TitleC'],
    content:['AAAAAAA','BBBBBBB','CCCCCC']};

class Tab extends React.Component{

    constructor() {
        super();
        this.state={
            index:0
        }
    }

    mouseOver(index){
        this.setState({index:index});
    }

    render(){
        return (
            <div className='outBox'>
                <Title title={this.props.data.title} mouseOver={this.mouseOver.bind(this)}></Title>
                <Content content={this.props.data.content} index={this.state.index}></Content>
            </div>)
    }
}


ReactDOM.render(<Tab data={oData}/>,document.getElementById('app'))
