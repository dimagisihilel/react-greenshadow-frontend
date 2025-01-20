import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../reducers/AuthSlice.ts";
import fieldReducer from "../reducers/FieldSlice.ts";

const store = configureStore({
    reducer: {
        auth:authReducer,
        field: fieldReducer,
    }
});
export default store;