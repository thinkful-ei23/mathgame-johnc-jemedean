import React from 'react'
import Timer from './timer';
import QuestionForm from './questionForm'
import Results from './results'
import NextButton from './nextbutton'

export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            timer: 30,
            index:0,
            result:null
        }
    }
    updateTimer(){
        this.setState({
            timer:this.state.timer-1
        })
    }
    
    answerSubmit(result){
        this.setState({
            result
        })
    }
    questionChange(index){
        this.setState({
            index
        })
    }

    render(){        
        return(
        <div>
            <Timer time ={this.state.timer} timePasses={()=>this.updateTimer()}/>
            <QuestionForm index={this.state.index}   results={result =>this.answerSubmit(result)}/>
            <Results feedback={this.state.result} time ={this.state.timer} />
            <NextButton  
                feedback={this.state.result} 
                time ={this.state.timer}
                index ={this.state.index}
                updateResults={clear =>this.answerSubmit(clear)}
                updateQuestion={(index)=>this.questionChange(index)}
            />
        
        </div>

        )
    }
}