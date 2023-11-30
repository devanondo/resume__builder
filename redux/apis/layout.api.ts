import { api } from './api'

export const layoutApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getLayout: builder.query({
            query: () => ({
                url: 'layout',
                method: 'GET',
            }),
            providesTags: ['updatedLayout'],
        }),
        updateLayout: builder.mutation({
            query: (body) => ({
                url: 'layout',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['updatedLayout'],
        }),
        saveLayout: builder.mutation({
            query: (body) => ({
                url: 'layout',
                method: 'PUT',
                body,
            }),
        }),
    }),
})

export const {
    useGetLayoutQuery,
    useUpdateLayoutMutation,
    useSaveLayoutMutation,
} = layoutApi
