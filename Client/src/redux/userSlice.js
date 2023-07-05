import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        password: "at least 8 characters ......",
        email: "name@email.com",
         confirmPassword:"********"
    },
    reducers: {
        update: (state, action) => {    // state is the current state  and action is the payload
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state) => {
            state.name = "";
            state.email = "";
        },  //Remove the user (set the state to empty object)
    }
});

export const { update, remove } = userSlice.actions; // Export the actions to be used in the components
export default userSlice.reducer; //Export the reducer to be used in the store