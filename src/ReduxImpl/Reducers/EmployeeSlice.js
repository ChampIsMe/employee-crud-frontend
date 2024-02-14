import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseURL = import.meta.env.VITE_APP_ENDPOINT
export const EmployeeSlice = createApi({
  reducerPath: "employees",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL,
    mode: "cors"
  }),
  tagTypes: ["Employees"],
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: (params) => `/employee/list?${new URLSearchParams(params).toString()}`,
      providesTags: ["Employees"]
    }),
    createEmployee: builder.mutation({
      query: (payload) => ({
        url: "employee/create",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["Employees"]
    })
  })
});

export const { useGetEmployeesQuery, useCreateEmployeeMutation } = EmployeeSlice