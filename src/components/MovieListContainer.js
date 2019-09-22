import React, { Component } from 'react'
import { connect } from 'react-redux'

import MovieList from './MovieList'
import { getMovies } from '../actions/movies'

class MovieListContainer extends Component {
  state = {}

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return (
      <MovieList movies={this.props.movies} />
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

// to be able to use getMovies in this component
const mapDispatchToProps = {
  getMovies
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer )