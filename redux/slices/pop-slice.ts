import { createSlice } from '@reduxjs/toolkit'

export const popoverSlice = createSlice({
    name: 'popover',
    initialState: {
        summeryPopoverKey: null as null | number | string,
    },
    reducers: {
        showPopover: (state, action) => {
            if (action.payload === null) {
                state.summeryPopoverKey = null
            } else {
                state.summeryPopoverKey = action.payload
            }
        },
        showPopoverReverse: (state, action) => {
            if (state.summeryPopoverKey) {
                state.summeryPopoverKey =
                    state.summeryPopoverKey + action.payload - 1
            }
        },
    },
})

export const { showPopover, showPopoverReverse } = popoverSlice.actions

export default popoverSlice.reducer
