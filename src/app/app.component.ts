import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:left">
                <ul>
                  <h2>Parent</h2>
                  <li><app-treenodes [data]="data" [key]="key"></app-treenodes></li>
                </ul>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number; 
  name = 'string';
  key: string = 'categories';
  data: Array<Object> = [
    {
      name: "child-1",
      categories: [],
    }
  ]
}
