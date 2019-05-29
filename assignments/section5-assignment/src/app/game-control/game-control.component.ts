import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() next = new EventEmitter<number>();
  count = 0;
  interval;
  GAME_SPEED_IN_MS = 1000;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = window.setInterval(() => {
      console.log('this.count: ', this.count)
      this.next.emit(this.count++);
    }, this.GAME_SPEED_IN_MS);
  }

  onStop() {
    window.clearInterval(this.interval);
  }

}
