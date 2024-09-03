import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Api call or asynchronous function in thunk
//first arugument is nem of slice+/+name of thunk fn
export const fetchRestaurant = createAsyncThunk('restaurantSlice/fetchRestaurant', () => {
    const result = axios.get('/restaurant.json').then(response => response.data);
    console.log("===Response from thunk===");
    console.log(result);
    return result;

})

const restaurantSlice = createSlice({
    name: "restaurantSlice",
    initialState: {
        loading: false, //pending state that means,api call in-progress
        allRestaurant: [], //resolve stage
        error: "",  //rejected state - return error
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false;
            state.allRestaurant = action.payload;
            state.searchRestaurant=action.payload;
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurant = []
            state.error = action.error.message
        })
    },
    reducers: {
        searchRestaurant: (state, action) => {
            state.allRestaurant.restaurants = state.searchRestaurant.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})
export default restaurantSlice.reducer;
export const {searchRestaurant}=restaurantSlice.actions;

//redux is asynchronous operation
// But Api call or file read or write,etc are Asynchronous operations
// To deal with asynchronous operation in redux,we are using Redux Thunk
//Thunk is not a part of slice, separate method in redux toolkit