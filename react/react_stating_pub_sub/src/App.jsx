import React from 'react';
import Search from "./components/search/Search";
import List from "./components/list/List";

class App extends React.Component {
    // state = {
    //     users: [],
    //     isFirst: true,
    //     isLoading: false,
    //     err: ''
    // };
    // searchUsers = (result) => {
    //     this.setState(result);
    // }
    // updateState = (stateObj) => {
    //     this.setState(stateObj);
    // }

    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        );
    }
}

export default App;