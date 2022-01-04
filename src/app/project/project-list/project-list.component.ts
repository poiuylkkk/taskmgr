import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listAnimation } from 'src/app/anims/list.anim';
import { slideToRight } from 'src/app/anims/router.anmi';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { InviteComponent } from '../invite/invite.component';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight,
    listAnimation
  ]
})
export class ProjectListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @HostBinding('@routeAnim') state: any

  projects: any[] = [
    {
      id: 1,
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/0.jpg'
    },
    {
      id: 2,
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
      this.projects = [...this.projects, {
        id: 3, name: '一个新项目', desc: '这是一个新项目', coverImg: 'assets/img/covers/3.jpg'
      }]
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

  onClickDelProject(project: any) {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title: '删除项目',
          content: '您确认删除该项目吗？'
        }
      }
    )
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      console.log(project)
      this.projects = this.projects.filter(item => item.id !== project.id)
    })
  }
}
