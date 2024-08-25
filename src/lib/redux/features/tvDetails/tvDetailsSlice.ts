import API, { options } from "@/lib/axios/movieApi";
import { InitialTvIDState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getTvDetails = createAsyncThunk(
    "tv/id",
    async ({ tvID }: { tvID: string | number }, { rejectWithValue }) => {
        try {
            const response = await API(`/tv/${tvID}?&language=en-US&append_to_response=credits,videos,reviews,keywords,watch/providers,external_ids,recommendations`, options);
            const data = response.data
            console.log("TV ID", data)
            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<ErrorResponse>
                if (axiosError.response) {
                    return rejectWithValue(axiosError.response.data)
                } else if (axiosError.request) {
                    return rejectWithValue({ message: "Network Error" })
                } else {
                    return rejectWithValue({ message: "Request Failed" })
                }
            }
        }
    }
)

const initialState: InitialTvIDState = {
    tvDetails: {},
    isLoading: false,
    isError: null
}

const tvDetailsSlice = createSlice({
    name: "tvDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTvDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = null
                state.tvDetails = action.payload
            })
            .addCase(getTvDetails.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(getTvDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})

export const selectTvIDLoading = (state: any) => state.tvDetails.isLoading;
export const selectTvIDError = (state: any) => state.tvDetails.isError;
export const selectTvDetails = (state: any) => state.tvDetails.tvDetails;
export default tvDetailsSlice.reducer
