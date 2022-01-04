import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  today!: string;

  constructor(private router: Router) { }

  @Output() navClick = new EventEmitter<void>()

  ngOnInit(): void {
    this.getDate()
  }

  getDate() {
    let today = new Date().getDate()
    return this.today = `day${today}`
    // console.log(this.today)
  }

  doClick() {
    // this.router.navigateByUrl('/project')
    this.navClick.emit()
  }
}
