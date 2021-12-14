import { Component, OnInit } from '@angular/core';
import { User } from './invite.types';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  autoMembers: any = ''
  items = [
    {
      id: 1,
      name: 'zhangsan'
    },
    {
      id: 2,
      name: 'lisi'
    },
    {
      id: 3,
      name: 'wangwu'
    },
  ]

  displayUser(user: User) {
    return user ? user.name : ''
  }
}
