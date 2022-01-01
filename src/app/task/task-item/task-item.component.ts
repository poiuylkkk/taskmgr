import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() item: any
  @Input() avatar: any
  @Output() clickItem = new EventEmitter<void>()
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
}
