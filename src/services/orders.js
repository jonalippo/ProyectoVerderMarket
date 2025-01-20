import { base_url } from "../config/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    postOrders: builder.mutation({
      query: ({ ...order }) => ({
        url: "oreders.json",
        method: "POST",
        body: order,
      }),
    }),
  }),
});

export const { usePostOrdersMutation } = ordersApi;
