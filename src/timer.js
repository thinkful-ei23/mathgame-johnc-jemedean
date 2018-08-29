import React from 'react'

export default class Timer extends React.Component{
    
    componentDidMount(){
        this.timerId = setInterval(
            ()=> this.props.timePasses(),1000
        )
    }
    
    componentWillReceiveProps(){
        if(this.props.time ===1){
            clearInterval(this.timerId)
        }
    }

    render(){
        return(
            <div>{this.props.time}</div>
        )
    } 
}



