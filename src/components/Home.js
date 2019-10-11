import React, { Component } from 'react'
// import MovieFormContainer from './MovieFormContainer'
import MovieListContainer from './MovieListContainer'

import '../styling/home.css'

class Home extends Component {
  render() {
    return(
      <div className='homePage'>
        <div className='list'>
          <MovieListContainer />
        </div>

        {/* <div className='form'>
          <MovieFormContainer />
        </div> */}
      </div>
    )
  }
}

export default Home
