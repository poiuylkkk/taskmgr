import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { itemAnim } from '../../anims/item.anim'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() item: any
  @Input() avatar: any
  @Output() clickItem = new EventEmitter<void>()
  widerPriority: string = 'in'

  ngOnInit(): void {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
    console.log(this.avatar)
  }

  onClickItem() {
    this.clickItem.emit()
  }

  onCheckbox(ev: Event) {
    ev.stopPropagation()
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'out'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'in'
  }
}
