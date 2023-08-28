import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IJobsSclice } from "../../types";
import api from "../../api";

const initialState: IJobsSclice = {
    jobs: [],
    loading: true,
    error: false,
    errorMessage: ""
}

export const getAllJobs = createAsyncThunk("getAllJobs", async (_, thunkApi) => {
    try {
        const res = await api.getAllJobs()
        return res.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

const jobs = createSlice({
    initialState,
    name: "jobs",
    reducers: {

    }, extraReducers: (builder) => {

        builder.addCase(getAllJobs.pending, (state) => {
            state.loading = true
            state.error = false
        })

        builder.addCase(getAllJobs.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.errorMessage = action.error.message
        })

        builder.addCase(getAllJobs.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.jobs = action.payload
        })
    }
})


export default jobs.reducer
