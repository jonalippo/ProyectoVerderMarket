import { base_url } from "../config/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["newOrders", "deleteOrder"],
  endpoints: (builder) => ({
    postOrders: builder.mutation({
      query: ({ order, localId }) => ({
        url: `orders/${localId}.json`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["newOrders"],
    }),

    getOrderUser: builder.query({
      query: ({ localId }) => `orders/${localId}.json`,
      transformResponse: (response) => {
        if (!response) {
          return null;
        }
        const data = Object.entries(response).map((item) => ({
          ...item[1],
          id: item[0],
        }));
        return data;
      },
      providesTags: ["newOrders"],
    }),

    deleteOrder: builder.mutation({
      query: ({ localId, orderId }) => ({
        url: `orders/${localId}/${orderId}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["newOrders"],
    }),
  }),
});

export const {
  usePostOrdersMutation,
  useGetOrderUserQuery,
  useDeleteOrderMutation,
} = ordersApi;
