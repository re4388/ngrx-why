import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // users$: Observable<User[]>;
  @Input() receiveFilterUsers;

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    // this.users$ = this.service.users$;
  }
}
