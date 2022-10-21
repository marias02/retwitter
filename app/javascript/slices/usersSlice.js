import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getAllUsers } from "../functions/UserUtils";

const initialState = {
    status: 'idle',
    users: []
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await getAllUsers();
        return response;
    } catch(err) {
        return err.message;
    }
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';

                const loadedUsers = action.payload.map(user => {
                    return user;
                })

                state.users = state.users.concat(loadedUsers);
            })
    }
})

export const selectAllUsers = (state) => state.users.users;
export const getUserStatus = (state) => state.users.status;
export const selectUserById = (state, userId) => 
    state.users.users.find(user => user.id === userId)
export const selectUserByUsername = (state, userName) =>
    state.users.users.find(user => user.username === userName)
export default usersSlice;