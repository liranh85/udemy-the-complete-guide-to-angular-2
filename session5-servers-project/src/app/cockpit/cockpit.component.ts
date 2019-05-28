import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // We need the Output() decorator to make it listenable from outside
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // No longer needed now that we're using a local reference in the template and thus are able to pass the input to the method, to read its value.
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }
}
