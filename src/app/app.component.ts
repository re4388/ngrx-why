import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  receiveFilterUsersNumber: number;
  receiveFilterUsers: User[];

  ngOnInit(): void {}

  receiveFilterUserNumber($event): void {
    console.log($event);
    this.receiveFilterUsersNumber = $event.length;
    this.receiveFilterUsers = $event;
  }
}
