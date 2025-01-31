import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu : Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantsService,
              private router: ActivatedRoute 
             ) { }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(
      this.router.parent.snapshot.params['id']
    )
    console.log(this.router.parent.snapshot.params["id"])

  }

}
