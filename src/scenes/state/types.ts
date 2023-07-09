export interface GetTasksResponse {
    id: string;
    _id: string;
    __v: number;
    name: string;
    taskType: string;
    startDate: Date;
    endDate: Date;
    labels: Array<string>;
    createdAt: string;
    updatedAt: string;
}