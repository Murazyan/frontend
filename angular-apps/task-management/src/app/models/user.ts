export class User{
    name: string;
    surname: string;
    email: string;
    password: string;
    avatar: string



    constructor(
        name: string,
        surname: string,
        email: string,
        password: string,
        avatar: string,
        isAdmin: boolean
    ){
        this.name =  name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }


    public isAdmin() :boolean {
        return this.email==='admin@gmail.com'
    }
}