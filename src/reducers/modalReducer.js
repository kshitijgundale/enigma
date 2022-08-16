import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modals",
    initialState: {
        "workspace": false,
        "model": false,
        "dataset": false
    },
    reducers: {
        toggleDisplay(state, action){
            state[action.payload.field] = action.payload.value
        }
    },
    extraReducers: {
        'user/setWorkspaces': (state, action) => {
            state.workspace = false
        },
        'user/setLoggedIn': (state, action) => {
            state.workspace = false
            state.model = false
            state.dataset = false
        }
    }
})

export const { toggleDisplay } = modalSlice.actions
export default modalSlice.reducer