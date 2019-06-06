import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number; 
  name = 'string';
  key: string = 'categories';
  data: Array<Object> = [
    {
      name: "Parent",
      categories: [],
      isOpen: true
    }
  ]
}
