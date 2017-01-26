import React from 'react'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt',
            number: 0
        }
    }
    update(e) {
        this.setState({txt: e.target.value})
    }

    render() {
        let text = this.props.txt
        return (
            <div>
                <h1>{this.state.txt} and {this.state.number}</h1>
                <input type="text" onChange={this.update.bind(this)}/>
            </div>
        )
    }
}

const WidgetA = () => <p>My wiiiidget</p>

class WidgetB extends React.Component {
    render() {
        return <h2>Another widget {this.props.text}</h2>
    }
}

export default App