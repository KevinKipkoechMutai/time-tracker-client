/* eslint-disable @typescript-eslint/no-unsafe-return */
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
        }),
        createTask: build.mutation<void, GetTasksResponse>({
            query: () => "task/tasks/create/",
            providesTags: undefined
        }),
        updateTask: build.mutation<void, GetTasksResponse>({
            query: () => "task/tasks/:id/update/",
            providesTags: undefined
        }),
        deleteTask: build.mutation<void, GetTasksResponse>({
            query: () => "task/tasks/:id/delete/",
            providesTags: undefined
        })
    })
})

export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = api

// import { Task } from "./types"

// //create a task
// export const createTask = async (task: Task) => {
//     const response = await fetch('/task/tasks', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(task)
//     })
//     if (response.status === 201) {
//         return await response.json()
//     } else {
//         throw new Error(response.statusText)
//     }
// }

// //get all tasks
// export const getTasks = async () => {
//     const response = await fetch('/task/tasks')
//     if (response.status === 200) {
//         return await response.json()
//     } else {
//         throw new Error(response.statusText)
//     }
// }

// //update task
// export const updateTask = async (id: string, task: Task) => {
//     const response = await fetch(`/task/tasks/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(task)
//     })
//     if (response.status === 200) {
//         return await response.json()
//     } else {
//         throw new Error(response.statusText)
//     }
// }

// //delete task
// export const deleteTask = async (id: string) => {
//     const response = await fetch(`/task/tasks/${id}`, {
//         method: 'DELETE',
//     })
//     if (response.status === 200) {
//         return await response.json()
//     } else {
//         throw new Error(response.statusText)
//     }
// }