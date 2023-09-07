import React from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends React.Component {

    render() {
        return (
            <NavLink activeClassName="frank" className="list-group-item" {...this.props}/>
        );
    }
}

export default MyNavLink;