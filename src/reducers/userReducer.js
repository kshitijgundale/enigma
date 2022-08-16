import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'
import workspaceService from '../services/workspace'

const userSlice = createSlice({
    name: "user",
    initialState: {isLoggedIn: false, username: null, email: null, workspaces: {}, datasets: {}},
    reducers: {
        setLoggedIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn
            state.username = action.payload.userData.username
            state.email = action.payload.userData.email
            state.workspaces = action.payload.userData.workspaces
            state.datasets = action.payload.userData.datasets
        },
        setWorkspaces(state, action) {
            state.workspaces[action.payload.id] = {
                name: action.payload.name,
                models: {}
            }
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
        dispatch(setLoggedIn({userData: {isLoggedIn: false, username: null, email: null, workspaces: {}, datasets: {}}, isLoggedIn: false}))
    }
    catch(error) {

    }
}

export const createWorkspace = data => {
    return async dispatch => {
        try {
            const workspaceData = await workspaceService.createWorkspace(data)
            console.log(workspaceData)
            dispatch(setWorkspaces(workspaceData))
        }
        catch(error) {
            if(error.response.status === 401){
                dispatch(setLoggedIn({userData: {isLoggedIn: false, username: null, email: null, workspaces: {}, datasets: {}}, isLoggedIn: false}))
            }
        }
    }
}

export const { setLoggedIn, setWorkspaces } = userSlice.actions
export default userSlice.reducer