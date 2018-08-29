import React from 'react'
import questions from './questions.json'

export default function QuestionForm(props){
        let input;
        const onSubmit = submitEvent => {
            submitEvent.preventDefault()
            if(+input.value === questions[props.index].answer){
                props.results(true)
            }
            else {
                props.results(false)
            }
            input.value=""
            }
            return(
                <form onSubmit={onSubmit}>
                    <span>{questions[props.index].question}</span>
                    <input type="text" placeholder="answer here" ref={answer =>input=answer }></input>
                    <button>submit</button>
                </form>
            )
        }
