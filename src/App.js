import React from 'react';
import logo from './logo.svg';

// Component
import MyButton from './components/Button/Button'
import MyButtonWithHook from './components/Button/ButtonWithHook'
import DataLoader from './components/DataLoader/DataLoader'
import DataLoaderRefactor from './components/DataLoader/DataLoaderRefactor'
import DataLoaderWithHook from './components/DataLoader/DataLoaderWithHook'
import DataLoaderWithHookFunction from './components/DataLoader/DataLoaderWithHookFunction'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <MyButtonWithHook />
        <DataLoader />
        <DataLoaderRefactor 
          render={ (data) => {
            return (
              <div>
                <ul>
                  {
                    data.map( item => (
                      <a href={item.url}>
                        <li key={item.id}> {item.name} </li>
                      </a>
                    ))
                  }
                </ul>
              </div>
            )
          }}
        />
        <DataLoaderWithHook />
        <DataLoaderWithHookFunction />

      </header>
    </div>
  );
}

export default App;
