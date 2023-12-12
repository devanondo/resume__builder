import { api } from './api'

export const resumeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getResume: builder.query({
            query: () => ({
                url: 'resume',
                method: 'GET',
            }),
        }),
        updateResume: builder.mutation({
            query: (body) => ({
                url: 'resume',
                method: 'PATCH',
                body,
            }),
        }),
    }),
})

export const { useGetResumeQuery, useUpdateResumeMutation } = resumeApi
