
// require('./index.css');
// import json,{a,b,c,d} from './demos/a';
// console.log(json);
// console.log(a,b,c);
// console.log(d);

import React from 'react';
import ReactDOM from 'react-dom';


class Tab extends React.Component{

    render(){
        return (<div className='outBox'>Hello React,BAdddC</div>)
    }
}


ReactDOM.render(<Tab/>,document.getElementById('app'))
