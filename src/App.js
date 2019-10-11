import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import MovieDetailsContainer from './components/MovieDetailsContainer'
import GamesContainer from './components/games/GamesContainer'
import CardFlipping from './components/games/card-flipping/CardFlipping'
import NavBar from './components/NavBar'

import './styling/app.css'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='app-content'>
        <Route exact path='/' component={Home} />
        <Route path='/details/:id' component={MovieDetailsContainer} />
        <Route exact path='/games/' component={GamesContainer} />
        <Route path='/games/card-flipping' component={CardFlipping} />
      </div>
    </div>
  )
}

export default App
