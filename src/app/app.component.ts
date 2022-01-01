import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  swichThemeChecked = false;

  swichTheme(checked: any) {
    console.log(checked)
    this.swichThemeChecked = checked
  }

  constructor(private oc: OverlayContainer) {
    // this.oc.getContainerElement().classList.add('my-dark-theme')
  }
}
