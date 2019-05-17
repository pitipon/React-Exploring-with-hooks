import React, { useState, useEffect } from 'react'

export default function DataLoader() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then( res => res.json())
            .then( data => {
                const results = data.results
                setData(results)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    data.map(item => (
                        <a href={item.url}>
                            <li key={item.id}> {item.name} </li>
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}