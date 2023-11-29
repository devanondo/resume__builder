import { configureStore } from '@reduxjs/toolkit'
import popSlice from './slices/pop-slice'
import modalSlice from './slices/modal-slice'
import resumeSlice from './slices/resume-layout-slice'
import { api } from './apis/api'

const store = configureStore({
    reducer: {
        popover: popSlice,
        modal: modalSlice,
        layout: resumeSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
