import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameElementsCount = 0;

  onNext(count: number) {
    console.log('Next event received by AppComponent. Count:', count)
    this.gameElementsCount = count;
  }
}
