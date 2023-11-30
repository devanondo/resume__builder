import {
    ILayoutItems,
    IResumeLayout,
} from '@/components/resume-builder-editable-div/types/resume-layout-types'
import { layoutItems, layoutStyles, resumeLayout } from '@/lib/resume-data'
import { createSlice } from '@reduxjs/toolkit'
import { layoutApi } from '../apis/layout.api'

export const resumeSlice = createSlice({
    name: 'layout',
    initialState: {
        resumeLayout: resumeLayout as IResumeLayout[],
        resumeLayoutItems: layoutItems as ILayoutItems[],
        layoutStyles: layoutStyles,
        layoutWithStyles: layoutItems.find((item) => item.isActive),
    },

    extraReducers: (builder) => {
        builder.addMatcher(
            layoutApi.endpoints.getLayout.matchFulfilled,
            (state, { payload }) => {
                state.resumeLayout = payload?.sections
            }
        )
    },
    reducers: {
        setLayoutData: (state, action) => {
            state.resumeLayout = action.payload
        },

        // SetActivelayout should be removed after backend integration
        setActiveLayout: (state, action) => {
            const layouts = state.resumeLayoutItems
            const newLayouts = layouts.map((layout) => {
                if (layout.id === action.payload) {
                    layout.isActive = true
                } else {
                    layout.isActive = false
                }
                return layout
            })

            //find the active layout and set to the layout page
            const activeLayout = newLayouts.find(
                (layout) => layout.id === action.payload
            )
            if (activeLayout) {
                state.resumeLayout = activeLayout?.layout
                state.layoutWithStyles = activeLayout
            }

            state.resumeLayoutItems = newLayouts
        },
    },
})

export const { setLayoutData, setActiveLayout } = resumeSlice.actions

export default resumeSlice.reducer
