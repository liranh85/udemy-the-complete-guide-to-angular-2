import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // We need the Input() decorator to expose this property, so that any parent component can bind to it
  @Input() element: {type: string, name: string, content: string};
  
  constructor() { }

  ngOnInit() {
  }

}
