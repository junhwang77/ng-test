import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
  selector: 'app-treenodes',
  templateUrl: './treenodes.component.html',
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

  isOpen = true

  toggle(index:number) {
    interface LooseObject {
      [key: string]: any
    }
    var eachObj:LooseObject = this.items[index]
    eachObj.isOpen = !eachObj.isOpen
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
        categories: [],
        isOpen: true
      }
      prevObj.categories.push(newObj)
    }
  }
}
