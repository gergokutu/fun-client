import React from 'react'

const Pagination = (props, totalPages, moviesPerPages, paginate) => {
  console.log('props.movies:', props.movies)
  const { movies } = props

  // const currentPage = 1
  // const moviesPerPages = 6
  // const totalPages = Math.ceil(props.movies.length / 6 )
  // const paginate = 'D'

  //  // get current post
  //  const indexOfLastMovie = currentPage * moviesPerPages
  //  const indexOfFirstMovie = indexOfLastMovie - moviesPerPages
  //  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPages / moviesPerPages); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
