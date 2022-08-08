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
    }
})

export const { toggleDisplay } = modalSlice.actions
export default modalSlice.reducer