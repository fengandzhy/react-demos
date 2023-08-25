import React from 'react';
import axios from "axios";
class App extends React.Component{

    getStudents = () =>{
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('success', response.data);},
            error =>{console.log('error', error);}
        );
    }

    getCars = () =>{
        axios.get('http://localhost:3000/api2/cars').then(
            response =>{console.log('success', response.data);},
            error =>{console.log('error', error);}
        );
    }

    render(){
        return (
            <div>
                <button onClick={this.getStudents}>点我看学生</button>
                <button onClick={this.getCars}>点我看汽车</button>
            </div>
        );
    }
}
export default App;