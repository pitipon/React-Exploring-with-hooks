import React, { Component } from 'react';

export default class Button extends Component {

    ////////////////
    // First way  //
    ////////////////
    // constructor() {
    //     super();
    //     this.state = { buttonText: 'Click me, please'}
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick() {
    //     this.setState({ buttonText: 'Thanks, been clicked!'})
    // }


    /////////////////
    // Second way  //
    /////////////////
    state = { buttonText: 'Click me, please' }

    handleClick = () => {
        this.setState({buttonText: 'Thanks, been clicked!'})
    }

    render() {
        const { buttonText } = this.state
        
        return (
            <button onClick={this.handleClick}>
                {buttonText}
            </button>
        )
    }
}