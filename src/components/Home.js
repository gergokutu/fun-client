import React, { Component } from 'react'
import MovieFormContainer from './MovieFormContainer'
import MovieListContainer from './MovieListContainer'

class Home extends Component {
  render() {
    return(
      <div className='homePage'>
        <h1>
          Movies for all!
        </h1>

        <div className='list'>
          <MovieListContainer />
        </div>

        <div className='form'>
          <MovieFormContainer />
        </div>
      </div>
    )
  }
}

export default Home
