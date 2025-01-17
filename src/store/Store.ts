import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../reducers/AuthSlice.ts";

const store = configureStore({
    reducer: {
        auth:authReducer,
    }
});
export default store;