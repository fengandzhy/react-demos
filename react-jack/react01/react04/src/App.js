import React from 'react';
import ReactDom from 'react-dom';
import HeaderComponent from "./components/header";
import './assets/css/app.css';

/**
 * 在 super() 被调用之前，子类是不能使用 this 的，在 ES2015 中，子类必须在 constructor 中调用 super()。
 * 传递 props 给 super() 的原因则是便于(在子类中)能在 constructor 访问 props。
 * */
class App extends React.Component{
    constructor() {
        super();
        this.state={
            bShow:true,
            goods:[
                {id:1,title:"潮流女装"},
                {id:2,title:"品牌男装"},
                {id:3,title:"手机电脑"}
            ]
        }
    }

    componentDidMount() {
        let header = ReactDom.findDOMNode(document.getElementById('header'));
        console.log(header.innerHTML);
    }

    changeShow(){
        this.state.bShow?this.setState({bShow:false}):this.setState({bShow:true});
    }

    render(){
        var name="张三";
        var content="<span style='color:#FF0000'>商品详情</span>";
        var content1 = <span style={{color:'#FF0000'}}>商品详情</span>;
        let lis = [];
        this.state.goods.forEach((item,index)=>{
            lis.push(<li key={index}>{item.title}</li>);
        })
        return(
            <div className="App">
                <HeaderComponent></HeaderComponent>
                {name}
                <div dangerouslySetInnerHTML={{__html:content}}></div>
                {content1}
                <div id="cart">购物车</div>
                {this.state.bShow && <div className="box"></div>}
                <button type="button" onClick={this.changeShow.bind(this)}>显示/隐藏</button>
                <ul>
                    {
                        this.state.goods.map((item,index)=>{
                            return <li key={index}>{item.title}</li>
                        })
                    }
                </ul>
                <ul>{lis}</ul>
            </div>
        );
  }
}


export default App;
