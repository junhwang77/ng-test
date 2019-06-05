import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
  selector: 'app-treenodes',
  template: `<ul *ngIf="items.length">
              <li *ngFor="let item of items; index as i">
                <div [@openClose]="isOpen ? 'open' : 'closed'" class="open-close-container">
                  <span (click)="toggle()">{{item.name}}</span>
                  <input #newItem
                    newItem.index="i"
                    (keyup.enter)="addItem(newItem.value, i)"
                    newItem.value=''
                  >
                  <button (click)="addItem(newItem.value, i)">Breed Child</button>
                  <app-treenodes *ngIf="item[key].length" [id]="item[id]" [key]="key" [data]="item[key]"></app-treenodes>
                </div>
              </li>
            </ul>`,
  styleUrls: ['./treenodes.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: 'auto',
        backgroundColor: 'black'
      })),
      
      state('closed', style({
          height: '19px',
          backgroundColor: 'grey'
      })),
      
      transition('open => closed', [
          animate('1s')
      ]),
      
      transition('closed => open', [
          animate('1s')
      ])
    ])
  ]
})
export class TreenodesComponent {
  @Input('data') items: Array<Object>
  @Input('id') id: number;
  @Input('key') key: string;
  @Input('index') index: number;

  isOpen = true;

  toggle() {    
    this.isOpen = !this.isOpen
    console.log(this.items)
  }

  addItem(value: string, index: number) {
    interface LooseObject {
      [key: string]: any
    }
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
