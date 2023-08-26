import React from 'react';
import Search from "./components/search/Search";
import List from "./components/list/List";
class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        );
    }
}
export default App;