import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiUrl } from '../apiUrl';
import { BehaviorSubject, filter, firstValueFrom, map, Observable, pipe, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly currentUser = 'currentUser';

  currentUserS = new BehaviorSubject<User | null>(this.getLoggedinUser())

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


}
