import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      
      state.user = action.payload

      const userJson = JSON.stringify(action.payload)
      localStorage.setItem('user', userJson)
    },
    logOut:(state)=>{
      state.user = null;
      localStorage.setItem('user', false)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser,logOut } = userSlice.actions

export default userSlice.reducer