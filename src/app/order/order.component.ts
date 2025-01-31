import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

import {FormGroup, FormBuilder, FormControl ,Validators, AbstractControl} from "@angular/forms"

import { Router } from "@angular/router"

import {tap} from 'rxjs/operators'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

  orderForm: FormGroup

  delivery: number = 8 //valor fixo

  orderId: string

  paymentOption: RadioOption[] = [
    { "label": "Dinheiro", "value": "MON" },
    { "label": "Cartão de Débito", "value": "DEB" },
    { "label": "Cartão de Refeição", "value": "REF" }
  ]

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      //Propriedades são os inputs
      name: new FormControl('',  {
         validators: [Validators.required, Validators.minLength(5)]
      }),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number : this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress : this.formBuilder.control(''),
      paymentOption: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'change'
      })
    }, {validators: [OrderComponent.equalsTo], updateOn: 'blur'})
  }

  static equalsTo(group: AbstractControl): {[key:string] : boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if (!email || !emailConfirmation) {
        return undefined
    }
    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true}
    }

    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order)
      .pipe(tap( (orderId: string) => {
        this.orderId = orderId
      }))
      .subscribe( (orderId: string) => {
        this.router.navigate(['/order-summary'])
        console.log(`Compra concluida ${orderId}`)
        this.orderService.clear()
      })
    console.log(order)
  }

}
