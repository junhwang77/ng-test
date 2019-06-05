import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-treenodes',
  template: `<ul *ngIf="items.length">
              <li *ngFor="let item of items; index as i">
                {{item.name}}
                <input #newItem
                  newItem.index="i"
                  (keyup.enter)="addItem(newItem.value, i)"
                  newItem.value=''
                >
                <button (click)="addItem(newItem.value, i)">Breed Child</button>
                <app-treenodes *ngIf="item[key].length" [id]="item[id]" [key]="key" [data]="item[key]"></app-treenodes>
              </li>
            </ul>`,
  styleUrls: ['./treenodes.component.css']
})
export class TreenodesComponent {
  @Input('data') items: Array<Object>
  @Input('id') id: number;
  @Input('key') key: string;
  @Input('index') index: number;

  addItem(value: string, index: number) {
    interface LooseObject {
      [key: string]: any
    }
    console.log(this.items)
    var prevObj:LooseObject = this.items[index]

    if(value) {
      var newObj = {
        index: index,
        name: value,
        categories: []
      }
      prevObj.categories.push(newObj)
    }
  }
}
