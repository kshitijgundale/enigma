import { configureStore } from "@reduxjs/toolkit";
import modelFormReducer from "./reducers/modelFormReducer";
import userReducer from './reducers/userReducer'

const store = configureStore({
    reducer: {
        user: userReducer,
        model: modelFormReducer
    }
})

export default store