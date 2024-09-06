import API, { options } from "@/lib/axios/movieApi";
import { InitialPersonDetails } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getPersonDetails = createAsyncThunk(
    "personDetails/id",
    async ({ personID }: { personID: number | string }, { rejectWithValue }) => {
        try {
            const response = await API(`/person/${personID}?&language=en-US&append_to_response=credits,external_ids,movie_credits,tv_credits`, options);
            const data = response.data;
            console.log("Person Details", data)
            return data
        }
        catch (error) {
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

const initialState: InitialPersonDetails = {
    personDetails: {},
    isLoading: false,
    isError: null,
}

const personDetailsSlice = createSlice({
    name: "personDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPersonDetails.pending, (state) => {
                state.isLoading = true;
                state.isError = null
            })
            .addCase(getPersonDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.personDetails = action.payload;
            })
            .addCase(getPersonDetails.rejected, (state, action) => {
                state.isError = action.payload
                state.isLoading = false
            })
    }
})

export const selectPersonDetails = (state: any) => state.personDetails.personDetails
export const selectPersonLoading = (state: any) => state.personDetails.isLoading
export const selectPersonError = (state: any) => state.personDetails.isError
export default personDetailsSlice.reducer