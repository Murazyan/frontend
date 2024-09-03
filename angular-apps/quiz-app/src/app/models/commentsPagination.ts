import { TaskComment } from "./taskComment";

export interface ICommentPagination {
    totalElementCount:  number;
    page: number;
    limit: number;
    content: TaskComment[];
}
