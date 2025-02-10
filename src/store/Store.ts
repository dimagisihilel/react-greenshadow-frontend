import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../reducers/AuthSlice.ts";
import fieldReducer from "../reducers/FieldSlice.ts";
import cropReducer from "../reducers/CropSlice.ts";
import staffReducer from "../reducers/StaffSlice.ts";
import vehicleReducer from "../reducers/VehicleSlice.ts";
const store = configureStore({
    reducer: {
        auth:authReducer,
        field: fieldReducer,
        crop:cropReducer,
        staff:staffReducer,
        vehicle:vehicleReducer,
    }
});
export default store;