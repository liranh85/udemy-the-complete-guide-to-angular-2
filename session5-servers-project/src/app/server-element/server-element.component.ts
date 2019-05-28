import { Component, OnInit, Input, /*ViewEncapsulation*/ } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Native, // Use Shadow DOM for CSS encapsulation
  // encapsulation: ViewEncapsulation.None, // Don't encapsulate styles, e.g. `p { color: red }` will affect all `<p>` in the document
  // encapsulation: ViewEncapsulation.Emulated, // Default behaviour, encapsulate styles by emulating the Shadow DOM - by adding custom attributes to the elements, and selecting those in the CSS.
})
export class ServerElementComponent implements OnInit {
  // We need the Input() decorator to expose this property, so that any parent component can bind to it
  @Input('srvElement') element: {type: string, name: string, content: string};
  
  constructor() { }

  ngOnInit() {
  }

}
