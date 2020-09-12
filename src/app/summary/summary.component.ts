import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/users.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  @Input() editUser: User;

  constructor() {}

  ngOnInit(): void {}
}
