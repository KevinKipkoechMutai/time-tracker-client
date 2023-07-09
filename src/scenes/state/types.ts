export interface GetTasksResponse {
    id: string;
    _id: string;
    __v: number;
    name: string;
    timeSpent: number,
    taskType: string;
    startDate: Date;
    endDate: Date;
    labels: Array<string>;
    createdAt: string;
    updatedAt: string;
}

export interface DeleteTaskResponse {
    id: string;
}

// export type Task = {
//     id: string,
//     name: string,
//     timeSpent: number,
//     startDate: Date
// }