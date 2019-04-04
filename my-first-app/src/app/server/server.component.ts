import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    // The added types are not required in TypeScript, as they can be inferred from the value. We added them for demo purposes only
    serverId: number = 10;
    serverStatus: string = 'offline';
}