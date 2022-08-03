import { createSlice } from '@reduxjs/toolkit'

const modelSlice = createSlice({
    name: "modelForm",
    initialState: {
        modelName: ""
    },
    reducers: {
        editForm(state, action){
            state[action.payload.field] = action.payload.value
        }
    }
})

export const { editForm } = modelSlice.actions
export default modelSlice.reducer
