import React, { Component } from 'react'
import { connect } from 'react-redux'

import MovieList from './MovieList'
import { getMovies } from '../actions/movies'
import Pagination from './Pagination'

class MovieListContainer extends Component {
  state = {}

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return <div>
      <MovieList movies={this.props.movies} />
      <Pagination movies={this.props.movies}/>
    </div>
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