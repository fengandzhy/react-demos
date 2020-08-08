import React from 'react';


class Title extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            index:0
        }
    }
    mouseOver(index){
        this.setState({index:index});
        this.props.mouseOver(index);
    }

    render(){
        let oLi = []
        this.props.title.forEach((value,index)=>{
            oLi.push(<li key={index} className={this.state.index==index?'active':''} onMouseOver={this.mouseOver.bind(this,index)}>{value}</li>)
        })

        return(
            <div className='topBox'>
                <ul>
                    {oLi}
                </ul>
            </div>
        )
    }
}
export default Title;