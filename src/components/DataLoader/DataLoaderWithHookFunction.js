import React, { useState, useEffect } from 'react'
// import useFetch from './useFetch'
import useFetch from './useFetchWithAsync'

export default function DataLoader(props) {
    const fetch = useFetch('https://pokeapi.co/api/v2/pokemon/')
    const data = fetch.results || []

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