import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GOOGLE_WEB_APP_URL } from "../../constants/API";

export const googleWebAppApi = createApi({
    reducerPath: 'googleWebAppApi',
    baseQuery: fetchBaseQuery({
        baseUrl: GOOGLE_WEB_APP_URL,
    }),
    endpoints: builder => ({
        getAllCars: builder.query<any, void>({
            query: () => '',
            transformResponse: (response) => response.data,
        })
    })

})

export const { useGetAllCarsQuery } = googleWebAppApi;