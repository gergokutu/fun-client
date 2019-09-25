import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import MovieDetailsContainer from './components/MovieDetailsContainer'
import GamesContainer from './components/games/GamesContainer'
import CardFlipping from './components/games/card-flipping/CardFlipping'

import './styling/App.css'

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/details/:id' component={MovieDetailsContainer} />
      <Route exact path='/games/' component={GamesContainer} />
      <Route path='/games/card-flipping' component={CardFlipping} />
    </div>
  )
}

export default App
