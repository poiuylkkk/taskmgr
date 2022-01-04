import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { cardAnim } from '../../anims/card.anim'

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item: any
  @Output() inviteMember = new EventEmitter<void>()
  @Output() clickEditProject = new EventEmitter<void>()
  @Output() clickDelProject = new EventEmitter<void>()
  @HostBinding('@card') cardState = 'out'

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out'
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
