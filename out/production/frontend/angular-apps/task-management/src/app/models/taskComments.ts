import { TaskComment } from "./taskComment";

export class TaskComments{
    totalElementCount:  number;
    page: number;
    content: TaskComment[];
    
    constructor(totalElementCount:  number,
                page: number,
                content: TaskComment[],){
        this.totalElementCount = totalElementCount;
        this.page = page;
        this.content = content;
    }

}