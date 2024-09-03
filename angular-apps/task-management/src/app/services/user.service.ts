import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiUrl } from '../apiUrl';
import { BehaviorSubject, filter, firstValueFrom, map, Observable, pipe, Subject } from 'rxjs';
import { IUserPagination, IUsersResponse, UserItem } from '../models/IListItem';
import { PageRequest } from '../models/pageRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  readonly currentUser = 'currentUser';

  currentUserS = new BehaviorSubject<User | null>(this.getLoggedinUser())
  public usersResponseBS  =new BehaviorSubject<IUserPagination>({
    totalElementCount: 10,
    page: 1,
    limit: 10,
    bookId: 0,
    content: []
  })

  constructor(private httpClient: HttpClient) {}


  public getLoggedinUser(): User | null {
    const userData = localStorage.getItem(this.currentUser)
    return userData ? <User>JSON.parse(userData) : null;
  }

 // Fetch all users
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(ApiUrl.USERS);
  }

  // Fetch a user by email and password
  public async getUserByEmailAndPassword(email: string, password: string) : Promise<Observable<User | null>>  {
     let users$ = this.getUsers().pipe(
      map((users: User[]) => 
        <User | null>users.find(user => 
          user.email.toLowerCase() === email.toLowerCase() && 
          user.password.toLowerCase() === password.toLowerCase()
        )
      )
    );
    users$.subscribe(user => {
      if (user) {
        localStorage.setItem(this.currentUser, JSON.stringify(user));
      }
      this.currentUserS.next(user);
    });
    
    return users$;
  }


  logout() {
    localStorage.removeItem(this.currentUser)
    this.currentUserS.next(null)
  }



  updateUserInfo(currentUser: User | null) {
    localStorage.setItem(this.currentUser, JSON.stringify(currentUser));
    this.currentUserS.next(currentUser);
  }

  public getUserList( txt: string, pageRequest: PageRequest, unshiftToExisting: boolean = false) {
    let params = new HttpParams()
      .set('txt', txt)
      .set('limit', pageRequest.limit)
      .set('page', pageRequest.page);
    // this.httpClient.get<IUsersResponse>(ApiUrl.USERS_PAGINATION, {params}).subscribe(res => {
    this.httpClient.get<IUsersResponse>(ApiUrl.USERS_PAGINATION).subscribe(res => {
      let content = [];
      if (unshiftToExisting) {
        const existingData = this.usersResponseBS.value.content;
        existingData.unshift(...res.content.map(c => new UserItem(c)));
        content = existingData;
      } else {
        content = res.content.map(c => new UserItem(c));
      }
      this.usersResponseBS.next(<IUserPagination>{...res, content: content, limit: pageRequest.limit});
    });
  }
}
