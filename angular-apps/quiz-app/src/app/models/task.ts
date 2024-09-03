import { TaskComments } from "./taskComments";
import { TaskLabel } from "./taskLabel";
import { TaskStatus } from "./taskStatus";

export class Task{
    id: number;
    title: string;
    desctioption: string;
    status: TaskStatus;
    label: TaskLabel;
    image?: string;
    comments: TaskComments;
    createdDate: Date;
    resolvedDate?: Date

    constructor(title: string,
                description: string,
                status: TaskStatus,
                label: TaskLabel,
                id: number,
                createdDate: Date,
                comments: TaskComments,
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
        this.label = label;
        this.id =  id;

    }

}