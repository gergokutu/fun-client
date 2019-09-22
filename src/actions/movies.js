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
    const action = allMovies(movies.body)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}
