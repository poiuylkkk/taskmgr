import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {dark: boolean, mas: string},
    private dialog: MatDialogRef<NewProjectComponent>,
    private oc: OverlayContainer
    ) { }

  ngOnInit(): void {
    console.log(`i resive ${this.data}`)
    ;
    this.data.dark
      ? this.oc.getContainerElement().classList.add('my-dark-theme')
      : null
  }

  onClick() {
    this.dialog.close('i receive your data')
  }
}
