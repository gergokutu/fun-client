import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../styling/games.css'

class GamesContainer extends Component {
  render() {
    return (
      <div className='games-container'>
        <p>Game previews come here... Click on the button and play!</p>
        <Link to='/games/card-flipping'><button>Play</button></Link>
      </div>
    )
  }
}

export default GamesContainer