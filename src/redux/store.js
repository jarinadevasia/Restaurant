import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";

const store=configureStore({
    reducer:{
        restaurantSlice:restaurantSlice,

    }
})
export default store;