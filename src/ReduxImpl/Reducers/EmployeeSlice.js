import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseURL = import.meta.env.VITE_APP_ENDPOINT
export const EmployeeSlice = createApi({
  reducerPath: "employees",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["Employees"],
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "employees",
      providesTags: ["Employees"]
    }),
    createEmployee: builder.mutation({
      query: (payload) => ({
        url: "employees",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["Employees"]
    })
  })
});

export const { useGetEmployeesQuery, useCreateEmployeeMutation } = EmployeeSlice