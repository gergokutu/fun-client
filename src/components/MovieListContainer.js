import React, { Component } from 'react'
import { connect } from 'react-redux'

import MovieList from './MovieList'
import { getMovies } from '../actions/movies'
import Pagination from './Pagination'

class MovieListContainer extends Component {
  state = {
    currentPage: 1,
    moviesPerPage: 6
  }

  componentDidMount() {
    this.props.getMovies()
  }
  
  render() {
    // get current movie
    const indexOfLastMovie = this.state.currentPage * this.state.moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - this.state.moviesPerPage
    const currentMovies = this.props.movies.slice(indexOfFirstMovie, indexOfLastMovie)

    // change page
    const paginate = (pageNumber) => this.setState({currentPage: pageNumber})

    return <div>
      <MovieList movies={currentMovies} />
      <Pagination 
        moviesPerPage={this.state.moviesPerPage} 
        totalMovies={this.props.movies.length} 
        paginate={paginate}
      />
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