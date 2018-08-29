import React from 'react'

export default function NextButton(props){
    let newIndex = props.index
    newIndex++
    if(props.index=== 4){
        return null
    }
    if(props.time===0){
        return <button>Next Question</button>
    }
    
    if(props.feedback === null){
        return null
    }
        return <button onClick={()=>[props.updateResults(null), props.updateQuestion(newIndex)]}>Next Question</button>;
    }


    
