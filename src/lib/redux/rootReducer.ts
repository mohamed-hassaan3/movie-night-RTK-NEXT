import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import mediaDetailsReducer from "./features/mediaDetails/mediaDetailsSlice";
import personDetailsReducer from "./features/personDetails/personDetailsSlice";
import collectionDetailsReducer from "./features/collectionDetails/collectionDetailsSlice";
import tvDetailsReducer from "./features/tvDetails/tvDetailsSlice"

export const RootReducer = combineReducers({
    search: searchReducer,
    mediaDetails: mediaDetailsReducer,
    personDetails: personDetailsReducer,
    collectionDetails: collectionDetailsReducer,
    tvDetails: tvDetailsReducer
})