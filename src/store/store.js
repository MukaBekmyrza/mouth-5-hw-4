import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countReducer from "./slices/counterSlice";
import usersReducer from "./slices/usersSlice";


const rootReducer = combineReducers({ count: countReducer, users: usersReducer })
const store = configureStore({ reducer: rootReducer })

export default store;   