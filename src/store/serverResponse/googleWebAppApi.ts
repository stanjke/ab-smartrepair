import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GOOGLE_WEB_APP_URL } from "../../constants/API";
import { ICar } from "../../types/types";

export const googleWebAppApi = createApi({
  reducerPath: "googleWebAppApi",
  baseQuery: fetchBaseQuery({
    baseUrl: GOOGLE_WEB_APP_URL,
  }),
  endpoints: (builder) => ({
    getAllCars: builder.query<any, void>({
      query: () => "",
      transformResponse: ({ data }) => data,
    }),
  }),
});

export const { useGetAllCarsQuery } = googleWebAppApi;
