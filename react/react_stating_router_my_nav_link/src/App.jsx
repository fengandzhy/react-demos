import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './pages/about/About'
import Home from './pages/home/Home'
import MyNavLink from "./components/myNavLink/MyNavLink";
import {Route,Switch} from 'react-router-dom'
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
                            <MyNavLink to="/frank/about">About</MyNavLink>
                            <MyNavLink to="/frank/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* switch 的作用就是当你匹配到一个路径时不再往下匹配了 */}
                                <Switch>
                                    <Route path="/frank/about" component={About}/>
                                    <Route path="/frank/home" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;