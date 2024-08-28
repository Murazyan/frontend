export class TaskComment{
    fromUser : string;
    fromUserImgUrl : string;
    comment: string;
    createdDate: string;
    
    constructor(fromUser : string,
                fromUserImgUrl: string,
                comment: string,
                createdDate: string){
        this.comment = comment;
        this.fromUser = fromUser;
        this.fromUserImgUrl = fromUserImgUrl;
        this.createdDate = createdDate;
    }

}