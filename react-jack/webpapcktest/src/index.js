//require('./assets/css/index/index.css');
import './assets/css/index/index.css';
import logo from './assets/images/apple.jpg';
let image=new Image();  //要用var不要用let定义，因为uglifyjs(js压缩)不支持es6
image.src=require("./assets/images/1.jpg").default; //这里必须要加default才行
console.log(image);
document.body.appendChild(image);
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    render(){
        return(
            <div>Hello React!</div>
        )
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById("app"));