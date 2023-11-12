import { configureStore } from '@reduxjs/toolkit'
import popSlice from './slices/pop-slice'
import modalSlice from './slices/modal-slice'
import resumeSlice from './slices/resume-layout-slice'

const store = configureStore({
    reducer: {
        popover: popSlice,
        modal: modalSlice,
        layout: resumeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
