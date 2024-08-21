import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiUrl } from '../apiUrl';
import { filter, firstValueFrom, map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly currentUser = 'currentUser'

  constructor(private httpClient: HttpClient) { }


  public getLoggedinUser(): User | null {
    const userData = localStorage.getItem(this.currentUser)
    return userData ? <User>JSON.parse(userData) : null;
  }

 // Fetch all users
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(ApiUrl.USERS);
  }

  // Fetch a user by email and password
  public async getUserByEmailAndPassword(email: string, password: string) : Promise<Observable<User | undefined>>  {
     let users$ = this.getUsers().pipe(
      map((users: User[]) => 
        users.find(user => 
          user.email.toLowerCase() === email.toLowerCase() && 
          user.password.toLowerCase() === password.toLowerCase()
        )
      )
    );
    const user = await firstValueFrom(users$);
    if (user) {
      localStorage.setItem(this.currentUser, JSON.stringify(user));
    }
    return users$;
  }





}
