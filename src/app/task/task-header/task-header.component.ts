import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  constructor() { }

  @Input() header: string = ''
  @Output() newTask = new EventEmitter<void>()
  @Output() moveAll = new EventEmitter<void>()
  @Output() delTask = new EventEmitter<void>()
  @Output() editTask = new EventEmitter<void>()
  ngOnInit(): void {
  }

  onClick() {
    this.newTask.emit()
  }

  onMoveAllTaskClick() {
    this.moveAll.emit()
  }

  onDelTask() {
    this.delTask.emit()
  }

  onEditTask() {
    this.editTask.emit()
  }
}
