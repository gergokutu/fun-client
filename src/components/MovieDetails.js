import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieDetails(props) {
  const { movies, movieId } = props
  console.log('MovieDetails PROPS:', movieId)
  
  return (
    <div className='detail-page'>
      <p>Details of movie with id: <b>{movieId}</b></p>

      {movies && movies.map(movie => {
        console.log('movie.id:', movie.id)
        console.log('ID:', movieId)
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

      <Link to='/'><button>Home</button></Link>
    </div>
  )
}