import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users$: Observable<User[]>;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  // }
}
