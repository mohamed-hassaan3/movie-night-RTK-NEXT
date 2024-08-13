import API, { options } from "@/lib/axios/movieApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type InitialStateSearch, Category, CurrentPage } from '@/types/index'
import axios, { AxiosError } from "axios";

export const getSearch = createAsyncThunk(
    'home/searchResult',
    async ({ searchTerm, currentPage, category }:
        { searchTerm: ApiPath, currentPage: CurrentPage, category: Category },
        { rejectWithValue }: RejectWithValue) => {
        try {
            const response = await API
                (`search/${category}?query=${encodeURIComponent(searchTerm)}&page=${currentPage}`, options);
            const data = await response.data
            console.log("DATA", data)
            return data
        } catch (error: unknown) {
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
);

// Fetch the Length of Categories Results (total_results)
export const getCategoriesResults = createAsyncThunk<{ category: string; totalResults: number}, {category: string, searchTerm: string}>(
    'search/fetchCategoryResults',
    async ({category, searchTerm}) => {
        try {
            const response = await API(`search/${category}?query=${encodeURIComponent(searchTerm)}`, options);
            console.log(searchTerm)
            return { category, totalResults: response.data.total_results };
        } catch (error) {
            throw new Error(`Failed to fetch results for category ${category}`);
        }
    }
);

const initialState: InitialStateSearch = {
    searchTerm: "",
    categoryResults: {},
    category: "movie",
    currentPage: 1,
    searchData: [] as any[],
    isLoading: false,
    isError: null
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSearch.fulfilled, (state, action) => {
            state.searchData = action.payload
            state.isLoading = false
            state.isError = null
        })
            .addCase(getSearch.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(getSearch.rejected, (state, action) => {
                state.isError = action.payload
                state.isLoading = false
            })
            .addCase(getCategoriesResults.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(getCategoriesResults.fulfilled, (state, action) => {
                const { category, totalResults } = action.payload
                state.categoryResults[category] = totalResults
                state.isLoading = false
            })
            .addCase(getCategoriesResults.rejected, (state, action) => {
                state.isError = action.payload
                state.isLoading = false
            })
    }

})

export const selectCategoryResults = (state: any) => state.search.categoryResults
export const selectSearchIsError = (state: any) => state.search.isError
export const selectSearchIsLoading = (state: any) => state.search.isLoading
export const selectSearchData = (state: any) => state.search.searchData
export const selectSearchTerm = (state: any) => state.search.searchTerm
export const selectCurrentPage = (state: any) => state.search.currentPage
export const selectCategory = (state: any) => state.search.category
export const { setSearchTerm, setCurrentPage, setCategory } = searchSlice.actions
export default searchSlice.reducer
