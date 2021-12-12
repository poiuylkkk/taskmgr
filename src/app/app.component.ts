import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  swickThemeChecked = false;

  swickTheme(checked: any) {
    console.log(checked)
    this.swickThemeChecked = checked
  }
}
