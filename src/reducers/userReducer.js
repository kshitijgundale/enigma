import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'

const userSlice = createSlice({
    name: "user",
    initialState: {isLoggedIn: true, username: "kshitij", email: "kshitijgundale08@gmail.com", workspaces: null, datasets: null},
    reducers: {
        setLoggedIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn
            state.username = action.payload.userData.username
            state.email = action.payload.userData.email
            state.projects = action.payload.userData.projects
            state.datasets = action.payload.userData.datasets
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

export const tokenLogin = async (dispatch) => {
    try {
        const userData = await userService.tokenLogin()
        dispatch(setLoggedIn({userData, isLoggedIn: true}))
    }
    catch(error) {

    }
}

export const logout = async (dispatch) => {
    try {
        await userService.logout()
        dispatch(setLoggedIn({user: {}, isLoggedIn: false}))
    }
    catch(error) {

    }
}

export const { setLoggedIn } = userSlice.actions
export default userSlice.reducer