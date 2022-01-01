import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item: any
  @Output() inviteMember = new EventEmitter<void>()
  @Output() clickEditProject = new EventEmitter<void>()
  @Output() clickDelProject = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  invitePerson() {
    this.inviteMember.emit()
  }

  editProject() {
    this.clickEditProject.emit()
  }

  onDelClick() {
    this.clickDelProject.emit()
  }
}
