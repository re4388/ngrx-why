import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { User } from '../models/users.model';
import { UsersService } from '../services/users.service';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  filter: FormControl;
  filter$: Observable<string>;
  filteredUsers$;
  users$: Observable<User[]>;
  // filterUserNumber$: Observable<number>;
  @Output() messageEvent = new EventEmitter<User[]>();

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.service.users$;
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredUsers$ = combineLatest([this.users$, this.filter$])
      .pipe(
        map(([users, filterString]) =>
          users.filter(
            (user) =>
              user.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
          )
        ),
        tap((d) => this.messageEvent.emit(d))
      )
      .subscribe();
  }
}
