import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GamesContainer extends Component {
  render() {
    return (
      <div className='games-container'>
        <p>Game previews come here. Click on the game and play!</p>
        <Link to='/games/card-flipping'><button>Flipping</button></Link>
      </div>
    )
  }
}

export default GamesContainer