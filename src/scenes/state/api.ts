import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetTasksResponse } from "./types"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),
    reducerPath: "main",
    tagTypes: ["Tasks"],
    endpoints: (build) => ({
        getTasks: build.query<Array<GetTasksResponse>, void>({
            query: () => "task/tasks/",
            providesTags: ["Tasks"]
        })
    })
})

export const { useGetTasksQuery } = api