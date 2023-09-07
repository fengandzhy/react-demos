import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './pages/about/About'
import Home from './pages/home/Home'
import {NavLink, Route} from 'react-router-dom'
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
                            <NavLink activeClassName="frank" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="frank" className="list-group-item" to="/home">Home</NavLink>
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