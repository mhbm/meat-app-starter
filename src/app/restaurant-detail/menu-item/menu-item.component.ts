import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import {trigger, state, transition, style, animate} from '@angular/animations'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({
          opacity: 0,
          transform: "translateY(-20px)"
        }),
        animate('400ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready'

  @Input() menuItem : MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  // Ele envia o objeto de item de menu para ser tratado dentro do evento "add" dos componentes
  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
