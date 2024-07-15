import API, { options } from "@/lib/axios/movieApi";
import { InitialMediaIDState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getMediaDetails = createAsyncThunk(
    "media/id",
    async ({ mediaID, category }: { mediaID: string | number, category: string }, { rejectWithValue }) => {
        try {
            const response = await API(`/${category}/${mediaID}?&language=en-US&append_to_response=credits,videos,reviews,keywords,watch/providers,external_ids,recommendations`, options);
            const data = response.data
            console.log("MEDIA ID", data)
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

const initialState: InitialMediaIDState = {
    mediaDetails: {},
    isLoading: false,
    isError: null
}

const mediaDetailsSlice = createSlice({
    name: "mediaDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMediaDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = null
            state.mediaDetails = action.payload
        })
            .addCase(getMediaDetails.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(getMediaDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})

export const selectMediaIDLoading = (state: any) => state.mediaDetails.isLoading;
export const selectMediaIDError = (state: any) => state.mediaDetails.isError;
export const selectMediaDetails = (state: any) => state.mediaDetails.mediaDetails;
export default mediaDetailsSlice.reducer
