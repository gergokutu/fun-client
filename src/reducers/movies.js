import { ALL_MOVIES } from '../actions/movies'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ALL_MOVIES:
      return action.payload
    default:
      return state
  }
}

export default reducer