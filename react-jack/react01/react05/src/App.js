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
            ],
            stateTitle:"更新state"
        }
    }

    componentDidMount() {
        let header = ReactDom.findDOMNode(document.getElementById('header'));
        console.log(header.innerHTML);
    }

    changeShow(){
        this.state.bShow?this.setState({bShow:false}):this.setState({bShow:true});
    }


    /**
     * 由于异步的问题, 在你点击第一下的时候它并没有显示'已更新state' 而是依旧显示'更新'
     * */
    changeStateTitle(){
        this.setState({
            stateTitle:"已更新state"
        });
        console.log(this.state.stateTitle);
    }

    /**
     * 用这种回调函数的方法很好的解决了异步的问题
     * */
    changeStateTitle2(){
        this.setState({stateTitle:"已更新state"},()=>{
            console.log(this.state.stateTitle);
        })
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
                <button onClick={this.changeStateTitle.bind(this)}>{this.state.stateTitle}</button>
                <button onClick={this.changeStateTitle2.bind(this)}>{this.state.stateTitle}2</button>
            </div>
        );
  }
}


export default App;
