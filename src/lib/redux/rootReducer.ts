import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import mediaDetailsReducer from "./features/mediaDetails/mediaDetailsSlice";

export const RootReducer = combineReducers({
    search: searchReducer,
    mediaDetails: mediaDetailsReducer
})