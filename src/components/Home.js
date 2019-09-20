import React, { Component } from 'react'
import MovieFormContainer from './MovieFormContainer'

class Home extends Component {
  render() {
    return(
      <div className='homePage'>
        <header>
          Movies for all!
        </header>
        <div className='list'>
          List of movies with picture comes here...
        </div>
        <div className='form'>
          <MovieFormContainer />
        </div>
      </div>
    )
  }
}


export default Home
