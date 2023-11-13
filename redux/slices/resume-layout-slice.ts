import {
    ILayoutItems,
    IResumeLayout,
} from '@/components/resume-builder/types/resume-layout-types'
import { createSlice } from '@reduxjs/toolkit'

const items: IResumeLayout[] = [
    {
        title: 'Group-1',
        column: 7,
        items: [
            {
                title: 'Summery',
                column: 1,
                key: 'summerySection',
                position: 1,
            },

            {
                title: 'Experience',
                column: 1,
                key: 'experienceSummary',
                position: 3,
            },
            {
                title: 'Educations',
                column: 1,
                key: 'education',
                position: 5,
            },
        ],
    },

    {
        title: 'Group-2',
        column: 5,
        items: [
            {
                title: 'Strength',
                column: 1,
                key: 'strength',
                position: 4,
            },
            {
                title: 'Skills',
                column: 1,
                key: 'skills',
                position: 2,
            },
        ],
    },
]

const layoutItems: ILayoutItems[] = [
    {
        id: '355as1d51aea1dee1a5d',
        title: 'Rain Maker',
        isActive: true,
        imgUrl: 'https://i.ibb.co/B3cbpyd/Screenshot-from-2023-11-12-23-29-35.png',
        layout: [
            {
                title: 'Group-1',
                column: 7,
                items: [
                    {
                        title: 'Summery',
                        column: 1,
                        key: 'summerySection',
                        position: 1,
                    },

                    {
                        title: 'Experience',
                        column: 1,
                        key: 'experienceSummary',
                        position: 3,
                    },
                    {
                        title: 'Educations',
                        column: 1,
                        key: 'education',
                        position: 5,
                    },
                ],
            },

            {
                title: 'Group-2',
                column: 5,
                items: [
                    {
                        title: 'Strength',
                        column: 1,
                        key: 'strength',
                        position: 4,
                    },
                    {
                        title: 'Skills',
                        column: 1,
                        key: 'skills',
                        position: 2,
                    },
                ],
            },
        ],
    },
    {
        id: '355as1d51aea1dee1a5c',
        title: 'Steam Roller',
        isActive: false,
        imgUrl: 'https://i.ibb.co/G7NNbc5/Screenshot-from-2023-11-12-23-30-21.png',
        layout: [
            {
                title: 'Group-1',
                column: 12,
                items: [
                    {
                        title: 'Summery',
                        column: 1,
                        key: 'summerySection',
                        position: 1,
                    },

                    {
                        title: 'Experience',
                        column: 1,
                        key: 'experienceSummary',
                        position: 3,
                    },
                    {
                        title: 'Educations',
                        column: 1,
                        key: 'education',
                        position: 5,
                    },
                ],
            },

            {
                title: 'Group-2',
                column: 12,
                items: [
                    {
                        title: 'Strength',
                        column: 1,
                        key: 'strength',
                        position: 4,
                    },
                    {
                        title: 'Skills',
                        column: 1,
                        key: 'skills',
                        position: 2,
                    },
                ],
            },
        ],
    },
]

export const resumeSlice = createSlice({
    name: 'layout',
    initialState: {
        resumeLayout: items as IResumeLayout[],
        resumeLayoutItems: layoutItems as ILayoutItems[],
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
            }

            state.resumeLayoutItems = newLayouts
        },
    },
})

export const { setLayoutData, setActiveLayout } = resumeSlice.actions

export default resumeSlice.reducer