import React from "react";

export default class ClassCounter extends React.Component {
    constructor(props) {
        console.log("Constructed")
        super(props);
        this.state = {
            counter: 0,
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })

    }

    componentDidMount() {
        console.log("Component did mount.");
        console.log("---------");
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("Component updated.");
        console.log("---------");
    }

    render() {
        console.log('Rendered');

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div>
                    Counter: {this.state.counter}
                </div>
            </div>
        )

    }

}