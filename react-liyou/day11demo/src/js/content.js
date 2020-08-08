import React from 'react';


class Content extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let oDiv = [];
        this.props.content.forEach((value,index)=>{
            oDiv.push(<div style={this.props.index == index? {'display':'block'}:{'display':'none'}} key={index}>{value}</div>);
        });
        return(
            <div className='bBox'>
                {oDiv}
            </div>
        )
    }
}
export default Content;