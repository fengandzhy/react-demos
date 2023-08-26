import React from 'react';
import Search from "./components/search/Search";
import List from "./components/list/List";
class App extends React.Component{
    state = {users:[]};
    getUsers = (users) =>{
        this.setState({users: users});
    }
    render(){
        const {users} = this.state;
        return (
            <div className="container">
                <Search getUsers={this.getUsers}/>
                <List users={users}/>
            </div>
        );
    }
}
export default App;