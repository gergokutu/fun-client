import React from 'react'

export default function MovieList(props) {
  const { movies } = props
  console.log('props:', movies)
  return (
    <div className='movie-list'>
      <h3>The list contains {movies.length} movies</h3>
      <div className='movies-container'>
        {!movies && 'Loading...'}
        {movies && movies.map(movie => {
          return <div key={movie.id} className='movie-card'>
              <p>{movie.title}</p>
              <img src={movie.posterUrl} alt='movie poster' />
            </div>
          }
        )}
      </div>
    </div>
  )
}