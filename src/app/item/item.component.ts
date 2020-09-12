import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/users.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: User;
  @Input() index: number;
  @Output() editUserEvent = new EventEmitter<User>();
  constructor() {}

  edit(item: User): void {
    // console.log(item);
    this.editUserEvent.emit(item);
  }

  ngOnInit(): void {}
}
