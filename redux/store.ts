import { configureStore } from '@reduxjs/toolkit'
import popSlice from './slices/pop-slice'

const store = configureStore({
    reducer: {
        popover: popSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
