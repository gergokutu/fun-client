import React from 'react'
import { Link } from 'react-router-dom'

import '../styling/movielist.css'

export default function MovieList(props) {
  const { movies } = props
  
  return (
    <div className='movie-list'>
      {/* <h3 className='movie-counter'>The page contains {movies.length} movies</h3> */}
      <div className='movies-container'>
        {!movies && 'Loading...'}
        {movies && movies.map(movie => {
          return <Link to={`/details/${movie.id}`} key={movie.id}>
              <div className='movie-card'>
                <p>{movie.title}</p>
                <img src={movie.posterUrl} alt='movie poster' />
              </div>
            </Link>
          }
        )}
      </div>
    </div>
  )
}
