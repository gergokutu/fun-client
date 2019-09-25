import React from 'react'

export default function MovieDetails(props) {
  const { movies, movieId } = props
  
  return (
    <div className='detail-page'>
      <p>Details of movie with id: <b>{movieId}</b></p>

      {movies && movies.map(movie => {
        if (movie.id === parseInt(movieId)) {
          return (
            <div className='movie-details' key={movie.id}>
              <p>{movie.title}</p>
              <img src={movie.posterUrl} alt='movie poster' />
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