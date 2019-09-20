import React from 'react'
import MovieFormContainer from './components/MovieFormContainer'



function App() {
  return (
    <div className="App">
      <header>
        Movie Poster
      </header>
      <div className='list'>
        List of movies with picture comes here...
      </div>
      <div className='form'>
        <MovieFormContainer />
      </div>
    </div>
  )
}

export default App
