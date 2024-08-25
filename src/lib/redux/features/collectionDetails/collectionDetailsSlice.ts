import API, { options } from "@/lib/axios/movieApi";
import { InitialCollectionDetails } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getCollectionDetails = createAsyncThunk(
    "collection/id",
    async ({ collectionID }: { collectionID: number | string | undefined }, { rejectWithValue }) => {
        try {
            const response = await API(`/collection/${collectionID}`, options)
            const data = response.data
            console.log("Collection", data)
            return data
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<ErrorResponse>
                if (axiosError.response) {
                    return rejectWithValue(axiosError.response.data)
                } else if (axiosError.request) {
                    return rejectWithValue({ message: "Network ERROR" })
                } else {
                    return rejectWithValue({ message: "Request Failed" })
                }
            }
        }
    }
)

const initialState: InitialCollectionDetails = {
    collectionDetails: {},
    isError: null,
    isLoading: false
}

const collectionDetailsSlice = createSlice({
    name: "collectionDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCollectionDetails.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getCollectionDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.collectionDetails = action.payload;
            })
            .addCase(getCollectionDetails.rejected, (state, action) => {
                state.isError = action.payload;
                state.isLoading = false;
            })
    }
})

export const selectCollectionDetails = (state: any) => state.collectionDetails.collectionDetails
export const selectIsError = (state: any) => state.collectionDetails.isError
export const selectIsLoading = (state: any) => state.collectionDetails.isLoading

export default collectionDetailsSlice.reducer