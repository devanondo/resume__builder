import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const saveResume = createAsyncThunk(
    'resume/saveResume',
    async (values: any, { fulfillWithValue, rejectWithValue }) => {
        try {
            const { data } = await axios.patch('/api/resume', values)

            return fulfillWithValue(data)
        } catch (error: any) {
            return rejectWithValue(
                error?.response?.data?.message ||
                    error?.message ||
                    'unknown error'
            )
        }
    }
)

type InitialType = {
    loading: boolean | null
    isSaved: boolean | null
}

const initialState: InitialType = {
    loading: null,
    isSaved: null,
}

export const resumeDataSlice = createSlice({
    name: 'resume',
    initialState: initialState,

    extraReducers: (builder) => {
        builder.addCase(saveResume.pending, (state) => {
            state.loading = true
        })

        builder.addCase(saveResume.fulfilled, (state) => {
            state.loading = false
            state.isSaved = true
        })

        builder.addCase(saveResume.rejected, (state) => {
            state.loading = false
            state.isSaved = false
        })
    },
    reducers: {
        resetSave: (state) => ({
            ...state,
            loading: null,
            isSaved: null,
        }),
    },
})

export const { resetSave } = resumeDataSlice.actions

export default resumeDataSlice.reducer
