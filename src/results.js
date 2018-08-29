import React from 'react'

export default function Results(props){
    if(props.time === 0){
        return(
            <div>You ran out of time!</div>
        )
    }
    if(props.feedback=== null){
        return(
            <div>Time To Do Some Math!</div>
        )
    }
    if(props.feedback === true){
            return(
                <div>You Are Correct!</div>
            )
        }
    else if(props.feedback === false){
        return(
            <div>Wrong Answer</div>
        )
    }
}
