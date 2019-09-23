import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieDetails(props) {
  console.log('MovieDetails PROPS:', props)
  return (
    <div className='detail-page'>
      <p>Details of movie with id: <b>movie.id</b></p>
      <Link to='/'><button>Home</button></Link>
    </div>
  )
}