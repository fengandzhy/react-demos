import React from 'react';
import ReactDom from 'react-dom';
import HeaderComponent from './components/header';

class App extends React.Component{
  componentDidMount(){
    console.log(this.refs['goods'].innerHTML);
    let header=ReactDom.findDOMNode(document.getElementById("header"));
    console.log(header.innerHTML);
  }
  render(){
    var name="张三";
    var content="<span style='color:#FF0000'>商品详情</span>";
    return (
        <div className="App">
          <HeaderComponent></HeaderComponent>
          {name}
          <div dangerouslySetInnerHTML={{__html:content}}></div>
          <div ref="goods">潮流女装</div>
          <div id="cart">购物车</div>
        </div>
    )
  }
}

export default App;


