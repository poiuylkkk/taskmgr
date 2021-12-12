import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loopAvatar()
  }
  avatars: string[] = []
  items: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  loopAvatar() {
    this.avatars = this.items.map(item => `avatar:svg-${item}`)
    console.log(this.avatars)
  }

}
