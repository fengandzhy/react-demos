import React from 'react';

import Counter from './Counter';
import User from './User'
class App extends React.Component {

    render() {
        return (
            <div>
                <Counter/>
                <User/>
            </div>
        );
    }
}

export default App;
