import React, { Component } from 'react'
import { connect } from 'react-redux'

import MovieList from './MovieList'
import { getMovies } from '../actions/movies'

class MovieListContainer extends Component {
  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return (
      <MovieList />
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     events: state.eventsList
//   }
// }

const mapDispatchToProps = {
  getMovies
} 

export default connect(null, mapDispatchToProps)(MovieListContainer )