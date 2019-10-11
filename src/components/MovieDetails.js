import React from 'react'
import '../styling/moviedetails.css'

export default function MovieDetails(props) {
  const { movies, movieId } = props
  
  return (
    <div className='detail-page'>
      

      {movies && movies.map(movie => {
        if (movie.id === parseInt(movieId)) {
          return (
            <div className='movie-details' key={movie.id}>
              <h1>{movie.title}</h1>
              <img className='movie-poster' src={movie.posterUrl} alt='movie poster' />
              <p>{movie.overview}</p>
              <p>Rate: {movie.rate}</p>
              <p>Total votes: {movie.votes}</p>
              <p>Release date: {movie.release}</p>
            </div>
            )
          } return null
        })
      }
    </div>
  )
}