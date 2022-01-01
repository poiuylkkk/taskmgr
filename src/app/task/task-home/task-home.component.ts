import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  taskLists: any[] = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          complete: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatar:svg-11',
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二：完成老板布置的ppt作业abcde',
          complete: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar:svg-12',
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三：项目代码评审',
          complete: true,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar:svg-13',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四：制定项目计划',
          complete: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar:svg-12',
          },
          dueDate: new Date(),
        },
      ]
    }
  ]
  taskItems: [] = []

  ngOnInit(): void {
  }

  newTaskList() {
    const dialog = this.dialog.open(
      NewTaskListComponent,
      {
        data: {
          title: '新建任务列表',
        }
      }
    )
  }

  onNewTask() {
    this.dialog.open(
      NewTaskComponent,
      {
        data: {
          title: '新建任务'
        }
      }
    )
  }

  onMoveAllTask() {
    const dialogRef = this.dialog.open(
      CopyTaskComponent,
      {
        data: {
          lists: this.taskLists
        }
      })
  }

  onClickItem(taskItem: any) {
    console.log(22)
    const dialogRef = this.dialog.open(
      NewTaskComponent,
      {
        data: {
          title: '修改任务',
          task: taskItem
        }
      }
    )
  }

  onDelTask() {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title: '删除任务列表',
          content: '您确定要删除当前任务吗？'
        }
      }
    )
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

  onEditTask(taskName: string) {
    const dialog = this.dialog.open(
      NewTaskListComponent,
      {
        data: {
          title: '修改列表名称',
          taskName: taskName
        }
      }
    )
  }
}
