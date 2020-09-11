import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  userNumber$: Observable<number>;
  @Input() receiveFilterUsersNumber: number;

  constructor() {}

  ngOnInit(): void {
    // this.userNumber$ = this.service.users$.pipe(map((data) => data.length));
  }
}
