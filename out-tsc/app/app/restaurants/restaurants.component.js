var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
var RestaurantsComponent = (function () {
    function RestaurantsComponent(restaurantsService, formBuilder) {
        this.restaurantsService = restaurantsService;
        this.formBuilder = formBuilder;
        this.searchBarState = 'hidden';
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = this.formBuilder.control("");
        this.searchForm = this.formBuilder.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (searchTerm) {
            return _this.restaurantsService
                .restaurants(searchTerm)
                .catch(function (error) {
                return Observable.from([]);
            });
        }).subscribe(function (restaurants) { return _this.restaurants = restaurants; });
        this.restaurantsService.restaurants()
            .subscribe(function (restaurants) { return _this.restaurants = restaurants; });
    };
    RestaurantsComponent.prototype.toggleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html',
            animations: [
                trigger('toggleSearch', [
                    state('hidden', style({
                        opacity: 0,
                        "max-height": "0px"
                    })),
                    state('visible', style({
                        opacity: 1,
                        "max-heigth": "70px",
                        "margin-top": "20px"
                    })),
                    transition('* => *', animate('250ms 0s ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [RestaurantsService, FormBuilder])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map