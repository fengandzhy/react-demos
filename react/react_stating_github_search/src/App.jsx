import React from 'react';
class App extends React.Component{
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