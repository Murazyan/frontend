
export class TaskComment {
    fromUser : string;
    fromUserImgUrl : string;
    comment: string;
    createdDate: string;
    id: number
    
    constructor(fromUser : string,
                fromUserImgUrl: string,
                comment: string,
                createdDate: string,
                id: number){
        this.comment = comment;
        this.fromUser = fromUser;
        this.fromUserImgUrl = fromUserImgUrl;
        this.createdDate = createdDate;
        this.id = id;
    }

}