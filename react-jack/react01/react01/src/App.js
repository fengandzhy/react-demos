import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header/header';


class App extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
    //console.log(this.refs['good'].innerHTML);
    //console.log(document.getElementById('header').innerHTML);
    let header=ReactDom.findDOMNode(document.getElementById("myHeader"));
    console.log(header.innerHTML);
  }

  render(){
    //var content=<span style={{color:'#FF0000'}}>商品详情</span>;
    var content1='<span style=\'color:#FF0000\'>商品详情</span>';
    return(<div className="App">
      {/*{content}*/}
      <div dangerouslySetInnerHTML={{__html:content1}}></div>
      {/*<div ref="good">商品详情</div>*/}
      <Header></Header>
    </div>);
  }
}
export default App;


