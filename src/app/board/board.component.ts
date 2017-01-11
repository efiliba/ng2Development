import { Component, Input } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() columns: number;
  @Input() rows: number;
  @Input() isClosed: boolean;

  constructor() {
    this.columns = 1;         // Default values, if not supplied
    this.rows = 1;

    // setInterval(() => {
    //   this.columns++;
    // }, 500);

    // setInterval(() => {
    //   this.rows++;
    // }, 1000);
  }
}
