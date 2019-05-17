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

        return (
            <div>
                <ul>
                    { 
                        this.state.data.map( item => (
                            <a href={item.url}>
                                <li key={item.id}> {item.name} </li>
                            </a>
                        ))
                    }
                </ul>
            </div>
        )
    }

}