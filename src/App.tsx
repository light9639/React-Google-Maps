import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComponent from './components/MyComponent'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className='Top'>
        <img src="https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg" alt="Img" />
        <h1>React Google Maps</h1>
      </div>
      <MyComponent />
    </div>
  )
}
