import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTextEnabled = true;
  buttonClicks = [];

  onClickButton($event) {
    this.toggleIsTextEnabled();
    this.buttonClicks.push($event.timeStamp)
  }

  toggleIsTextEnabled() {
    this.isTextEnabled = !this.isTextEnabled
  }
}
