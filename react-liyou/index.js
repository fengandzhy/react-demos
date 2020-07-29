
// require('./index.css');
// import json,{a,b,c,d} from './demos/a';
// console.log(json);
// console.log(a,b,c);
// console.log(d);

import React from 'react';
import ReactDOM from 'react-dom';

class Leo extends React.Component{

    render(){
        return (<div>Hello React!</div>)
    }
}


ReactDOM.render(<Leo/>,document.getElementById('app'))
