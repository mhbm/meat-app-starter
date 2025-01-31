var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
var RestaurantComponent = (function () {
    function RestaurantComponent() {
        this.restaurantState = 'ready';
    }
    RestaurantComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RestaurantComponent.prototype, "restaurant", void 0);
    RestaurantComponent = __decorate([
        Component({
            selector: 'mt-restaurant',
            templateUrl: './restaurant.component.html',
            animations: [
                trigger('restaurantAppeared', [
                    state('ready', style({ opacity: 1 })),
                    transition('void => ready', [
                        style({
                            opacity: 0,
                            transform: 'translate(-30px, -10px)'
                        }),
                        animate('300ms 0s ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantComponent);
    return RestaurantComponent;
}());
export { RestaurantComponent };
//# sourceMappingURL=restaurant.component.js.map