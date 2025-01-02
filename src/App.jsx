import React from 'react'
import Navigation from './config/Navigation'
import Home from './Components/Home'
import { BrowserRouter } from 'react-router-dom'
import bg from "../src/assets/bg.png"

const App = () => {
  return (
    <BrowserRouter>
      <div 
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App
