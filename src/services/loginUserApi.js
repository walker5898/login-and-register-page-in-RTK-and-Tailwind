import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginuserApi = createApi({
  reducerPath: "loginusersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004/",
  }),
  tagTypes: ["Loginuser"],

  endpoints: (builder) => ({
    // GET metodi
    loginusers: builder.query({
      query: () => "/loginusers",
      providesTags: ["Loginuser"],
    }),
    getLoginUserDetails: builder.query({
      query: (id) => `/loginusers/${id}`,
    }),
    // Post metodi
    addLoginUser: builder.mutation({
      query: (loginuser) => ({
        url: "/loginusers",
        method: "POST",
        body: loginuser,
      }),
      invalidatesTags: ["Loginuser"],
    }),
    updateLoginUser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/loginusers/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Loginuser"],
    }),
    deleteLoginUser: builder.mutation({
      query: (id) => ({
        url: `/loginusers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Loginuser"],
    }),
  }),
});

export const {
  useLoginusersQuery,
  useGetLoginUserDetailsQuery,
  useAddLoginUserMutation,
  useUpdateLoginUserMutation,
  useDeleteLoginUserMutation,
} = loginuserApi;
