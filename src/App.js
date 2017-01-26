import React from 'react'
import update from 'immutability-helper'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Some state text",
            answers: [],
            problems: ['done', '1+1', '2+3', '5-2'],
            correct: '',
            currentProblem: '0+1'
        }
    }


    updateAnswer(e) {
        this.setState({answer: e.target.value})
    }

    click(e) {
        console.log(parseInt(this.state.answer))
        console.log(eval(this.state.currentProblem))
        if(parseInt(this.state.answer) === eval(this.state.currentProblem)) {
            let problems = this.state.problems
            const answerInfo = {
                currentTime: new Date().getTime(),
                correct: true,
                problem: this.state.currentProblem,
            }
            let newProblem = problems.pop()
            let answers = this.state.answers
            answers.push(answerInfo)
            this.setState({
                correct: 'Correct Answer!',
                currentProblem: newProblem,
                answers,
                problems
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <h2>Solve this:</h2>
                <p>{this.state.currentProblem} = {this.state.answer}</p>
                <input type="text" onChange={this.updateAnswer.bind(this)} />
                <button onClick={this.click.bind(this)}>Submit</button>
                <p>{this.state.correct}</p>
                <p>{this.state.problemsLeft}</p>
            </div>
        )
    }
}


let test = 'erer'

export default App
