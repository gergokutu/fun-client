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
// import { ALL_EVENTS, CREATE_EVENT } from '../actions/events'

// const reducer = (state = [], action = {}) => {
//   switch (action.type) {
//     case ALL_EVENTS:
//       return action.payload
//     case CREATE_EVENT:
//       return [action.payload, ...state]
//     default:
//       return state
//   }
// }

// export default reducer