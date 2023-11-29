import { api } from './api'

const resumeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getResume: builder.query({
            query: () => ({
                url: 'resume',
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetResumeQuery } = resumeApi
