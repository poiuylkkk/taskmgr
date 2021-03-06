import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {

  title: string = ''
  taskName: string = ''
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewTaskListComponent>
  ) { }

  ngOnInit(): void {
    this.title = this.data.title
    this.taskName = this.data.taskName
  }

  onClick() {
    this.dialogRef.close(this.title)
  }
}
