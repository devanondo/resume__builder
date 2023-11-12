import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        type: null,
        data: {},
        isOpen: false,
    },
    reducers: {
        openModal: (state, action) => {
            state.type = action.payload.type
            state.data = action.payload.data
            state.isOpen = true
        },
        closeModal: (state) => {
            state.type = null
            state.data = {}
            state.isOpen = false
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
// export const selectModal = (state) => state.modal;

export default modalSlice.reducer
