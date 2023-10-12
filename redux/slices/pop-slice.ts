import { createSlice } from '@reduxjs/toolkit'

export const popoverSlice = createSlice({
    name: 'popover',
    initialState: {
        summeryPopoverKey: null as null | number | string,
        groupPopoverKey: null as null | number | string,
    },
    reducers: {
        showPopover: (
            state,
            action: {
                payload: {
                    type: 'single__entry' | 'group__entry'
                    name: string
                } | null
                type: string
            }
        ) => {
            if (action.payload === null) {
                state.summeryPopoverKey = null
                state.groupPopoverKey = null
            } else {
                switch (action.payload.type) {
                    case 'single__entry':
                        state.groupPopoverKey = null
                        state.summeryPopoverKey = action.payload.name

                        break

                    case 'group__entry':
                        state.summeryPopoverKey = null
                        state.groupPopoverKey = action.payload.name

                        break

                    default:
                        break
                }
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
