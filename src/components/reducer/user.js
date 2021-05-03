import * as types from '../../constants'

const initialState = {
  currentUser: null,
  isFetching: false,
  dataFetched: false,
  error: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
      case types.SET_CURRENT_USER_REQUEST: {
          return {
              ...state,
              isFetching: true
          }
      }
      case types.SET_CURRENT_USER_SUCCESS:
          return {
              ...state,
              isFetching: false,
              dataFetched: true,
              error: false,
              errorMessage: null,
              currentUser: action.payload
          }
      case types.SET_CURRENT_USER_FAILURE:
          return {
              ...state,
              isFetching: false,
              error: true,
              errorMessage: action.payload.errorMessage
          }
      case types.SET_LOGOUT:
          return {
              ...state,
              currentUser: null
          }
      default:
          return state;
  }
}
