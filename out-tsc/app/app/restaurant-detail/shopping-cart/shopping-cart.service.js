var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CartItem } from "./cart-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/message/notification.service";
var ShoppingCartService = (function () {
    function ShoppingCartService(notificationService) {
        this.notificationService = notificationService;
        this.items = [];
    }
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    //É adicionado um item do MENU no carrinho
    ShoppingCartService.prototype.addItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; });
        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.items.push(new CartItem(item));
        }
        this.notificationService.notify("Voc\u00EA adicionou um item " + item.name);
    };
    // É Removido um item do Carrinho
    ShoppingCartService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify("Voc\u00EA adicionou um item " + item.menuItem.name);
    };
    ShoppingCartService.prototype.total = function () {
        return this.items.map(function (item) { return item.value(); })
            .reduce(function (sumTotal, value) { return sumTotal + value; }, 0);
    };
    ShoppingCartService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCartService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity == 0) {
            this.removeItem(item);
        }
    };
    ShoppingCartService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationService])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map