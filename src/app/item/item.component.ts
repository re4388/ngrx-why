import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/users.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: User;

  constructor() {}

  ngOnInit(): void {}
}
