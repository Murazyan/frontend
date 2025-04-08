import { User } from "./user";

export interface IListItem{
    id: number;
    value: string;

}

export class UserItem implements IListItem{
    id: number;
    value: string;
    img: string


    constructor(user: User){
        this.id = 0;
        this.value = user.name+' '+user.surname;
        this.img = user.avatar;
    }

}

export interface IUserPagination {
    totalElementCount:  number;
    page: number;
    limit: number;
    bookId: number;
    content: UserItem[];
}

export interface IUsersResponse {
    totalElementCount:  number;
    page: number;
    bookId: number;
    content: User[];
}
