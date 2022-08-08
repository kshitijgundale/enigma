import { configureStore } from "@reduxjs/toolkit";
import modelFormReducer from "./reducers/modelFormReducer";
import userReducer from './reducers/userReducer'
import modalReducer from "./reducers/modalReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        model: modelFormReducer,
        modals: modalReducer
    }
})

export default store