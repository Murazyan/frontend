import { TaskComment } from "./taskComment";
import { TaskStatus } from "./taskStatus";

export class Task{
    title: string;
    desctioption: string;
    status: TaskStatus;
    image?: string;
    comments: TaskComment[];
    createdDate: Date;
    resolvedDate?: Date

    constructor(title: string,
                description: string,
                status: TaskStatus,
                createdDate: Date,
                comments: TaskComment[],
                image?: string,
                resolvedDate?: Date

    ) {
        this.title = title;
        this.desctioption = description;
        this.status = status;
        this.createdDate = createdDate;
        this.resolvedDate = resolvedDate;
        this.image = image;
        this.comments = comments;

    }

}