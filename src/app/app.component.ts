import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <board columns=4 rows=3 isClosed="false">
    </board>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
