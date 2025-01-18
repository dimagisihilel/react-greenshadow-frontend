import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../reducers/AuthSlice.ts";
import fieldReducer from "../reducers/FieldSlice";

const store = configureStore({
    reducer: {
        auth:authReducer,
        fields: fieldReducer,
    }
});
export default store;