import * as types from '../../constants'

export const setCurrentUser = (user) => {
  return {
      type: types.SET_CURRENT_USER_SUCCESS,
      payload: user
  }
}

export const setLogout = () => {
  return {
      type: types.SET_LOGOUT
  }
}