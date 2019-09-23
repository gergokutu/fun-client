import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import MovieDetailsContainer from './components/MovieDetailsContainer'

import './styling/App.css'

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/details' component={MovieDetailsContainer} />
    </div>
  )
}

export default App
