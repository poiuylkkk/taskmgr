import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteComponent } from '../invite/invite.component';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  projects: object[] = [
    {
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/0.jpg'
    },
    {
      name: '自动化测试项目',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/1.jpg'
    },
  ]

  openAddProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        title: '新建项目',
        dark: false,
        msg: 'this is my data'
      }
    })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

  inviteMemberFn() {
    this.dialog.open(InviteComponent)
  }

  onClickEditProject(project: any) {
    console.log(project)
    const dialog = this.dialog.open(
      NewProjectComponent,
      {
        data: {
          title: '编辑项目'
        }
      }
    )
  }
}
