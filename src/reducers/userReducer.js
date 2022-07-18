import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'

const userSlice = createSlice({
    name: "user",
    initialState: {isLoggedIn: false, user: {}},
    reducers: {
        setLoggedIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn
            state.user = action.payload.userData
        }
    }
})

export const login = creds => {
    return async dispatch => {
        const userData = await userService.login(creds)
        dispatch(setLoggedIn({userData, isLoggedIn: true}))
    }
}

export const signup = creds => {
    return async dispatch => {
        const userData = await userService.signup(creds)
        dispatch(setLoggedIn({userData, isLoggedIn: true}))
    }
}

export const { setLoggedIn } = userSlice.actions
export default userSlice.reducer