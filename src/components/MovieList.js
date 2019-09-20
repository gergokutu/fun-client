import React from 'react'

export default function MovieList(props) {
  const { movies } = props
  console.log('props:', movies)
  return (
    <div className='movieList'>
      <h3>This list contains {movies.length} movies</h3>
      <ul>
        {!movies && 'Loading...'}
        {movies && movies.map(movie => {
          return <li key={movie.id}>
              <p>{movie.title}</p>
              <img src={movie.posterUrl} alt='movie poster' />
            </li>
          }
        )}
      </ul>
    </div>
  )
}