import React, { Component } from 'react'

export default class DataLoader extends Component {
    state = { data: [] }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then( res => res.json())
            .then( data => {
                const results = data.results
                this.setState({ data: results })
            })
    }

    render() {
        return this.props.render(this.state.data)
    }

}