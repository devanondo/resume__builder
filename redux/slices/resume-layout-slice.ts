import {
    IItem,
    ILayoutItems,
    IResumeLayout,
} from '@/components/resume-builder-editable-div/types/resume-layout-types'
import { layoutItems, layoutStyles, resumeLayout } from '@/lib/resume-data'
import { createSlice } from '@reduxjs/toolkit'

export const resumeSlice = createSlice({
    name: 'layout',
    initialState: {
        resumeLayout: resumeLayout as IResumeLayout[],
        resumeLayoutItems: layoutItems as ILayoutItems[],
        layoutStyles: layoutStyles,
        layoutWithStyles: layoutItems.find((item) => item.isActive),
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

        // changeLayoutStyles: (
        //     state,
        //     action: {
        //         payload:
        //             | {
        //                   type: 'colors'
        //                   primaryColor: string
        //                   secondaryColor: string
        //               }
        //             | {
        //                   type:
        //                       | 'pageMargin'
        //                       | 'fontFamily'
        //                       | 'fontSize'
        //                       | 'backgroundImage'
        //                   value: string
        //               }
        //     }
        // ) => {
        //     switch (action.payload.type) {
        //         case 'colors':
        //             state.layoutStyles.primaryColor =
        //                 action.payload.primaryColor
        //             state.layoutStyles.secondaryColor =
        //                 action.payload.secondaryColor

        //             break

        //         case 'pageMargin':
        //         case 'fontFamily':
        //         case 'fontSize':
        //         case 'backgroundImage':
        //             state.layoutStyles[action.payload.type] =
        //                 action.payload.value

        //             break

        //         default:
        //             break
        //     }
        // },

        //Add section to the resume editor
        addSectionToEditor: (
            state,
            action: {
                payload: {
                    group: 'Group-1' | 'Group-2'
                    value: IItem
                }
            }
        ) => {
            state.resumeLayout.map((layout) => {
                if (layout.title === action.payload.group) {
                    layout.items.push(action.payload.value)
                }
                return layout
            })
        },

        //Add section to the resume editor
        removeSectionFromEditor: (
            state,
            action: {
                payload: {
                    key: string
                }
            }
        ) => {
            let resumelayoutCopy = state.resumeLayout

            for (const group of resumelayoutCopy) {
                group.items = group.items.filter(
                    (item) => item.key !== action.payload.key
                )
            }

            state.resumeLayout = resumelayoutCopy
        },
    },
})

export const {
    setLayoutData,
    setActiveLayout,
    // changeLayoutStyles,
    addSectionToEditor,
    removeSectionFromEditor,
} = resumeSlice.actions

export default resumeSlice.reducer
