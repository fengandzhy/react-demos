import React from 'react';
import axios from "axios";
class App extends React.Component{

    click = () =>{
        axios.get('http://localhost:3000/students').then(
            response =>{console.log('success', response.data);},
            error =>{console.log('error', error);}
        );
    }

    render(){
        return (
            <div>
                <button onClick={this.click}>点我</button>
            </div>
        );
    }
}
export default App;