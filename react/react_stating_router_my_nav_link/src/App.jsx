import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './pages/about/About'
import Home from './pages/home/Home'
import MyNavLink from "./components/myNavLink/MyNavLink";
import {Route} from 'react-router-dom'
import './App.css';
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*这样写 <MyNavLink to="/about">About</MyNavLink> 相当于 <MyNavLink to="/about" children="About"/>
                            children是一个隐形属性
                            */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;