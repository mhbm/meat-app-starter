import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem {

    //Adicionado public para poder ser acessado em outras classes
    constructor(public menuItem: MenuItem, public quantity: number = 1) {

    }

    value() {
        return  this.menuItem.price * this.quantity
    }

}