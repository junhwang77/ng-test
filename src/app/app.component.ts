import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:left">
                  <h2>n-Deep Tree</h2>
                  <app-treenodes [data]="data" [key]="key"></app-treenodes>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number; 
  name = 'string';
  key: string = 'categories';
  data: Array<Object> = [
    {
      name: "Alien Queen",
      categories: [],
    }
  ]
}
