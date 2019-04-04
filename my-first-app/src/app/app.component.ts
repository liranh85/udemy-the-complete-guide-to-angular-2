import { Component } from '@angular/core';

@Component({
  // We can also select by class and by attribute, but we normally just select by tag name
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  name = 'Liran'
}
