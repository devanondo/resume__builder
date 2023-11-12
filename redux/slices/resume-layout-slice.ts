import { IResumeLayout } from '@/components/resume-builder/types/resume-layout'
import { createSlice } from '@reduxjs/toolkit'

const items: IResumeLayout[] = [
    {
        title: 'Group-1',
        column: 3,
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
        column: 2,
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

export const resumeSlice = createSlice({
    name: 'layout',
    initialState: {
        resumeLayout: items,
    },
    reducers: {
        setLayoutData: (state, action) => {
            state.resumeLayout = action.payload
        },
    },
})

export const { setLayoutData } = resumeSlice.actions

export default resumeSlice.reducer
