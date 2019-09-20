import * as request from 'superagent'
import { baseUrl } from '../constants'

export const ALL_MOVIES = 'ALL_MOVIES'

export function allMovies(payload) {
  return {
    type: ALL_MOVIES,
    payload
  }
}

export const getMovies = () => async (dispatch) => {
  try {
    const movies = await request.get(`${baseUrl}/movies`)
    const action = allMovies(movies)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

// export const ALL_EVENTS = 'ALL_EVENTS'

// export function allEvents(payload) {
//   return {
//     type: ALL_EVENTS,
//     payload
//   }
// }

// export const getEvents = () => (dispatch) => {
//   request.get(
//     `${baseUrl}/events`)
//     .then(response => {
//       const action = allEvents(response.body)

//       dispatch(action)
//     })
//     .catch(console.error)
// }

// export function getAlbums() {
//   return function (dispatch) {
//     request('https://jsonplaceholder.typicode.com/albums')
//       .then(response => {
//         dispatch(setAlbums(response.body))
//       })
//   }
// }