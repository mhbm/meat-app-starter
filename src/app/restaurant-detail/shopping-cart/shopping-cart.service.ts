import { CartItem } from "./cart-item.model"
import { MenuItem } from "../menu-item/menu-item.model"

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }


    //É adicionado um item do MENU no carrinho
    addItem(item:MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1 
        } else {
            this.items.push(new CartItem(item))
        }
    }

    // É Removido um item do Carrinho
    removeItem(item:CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items.map(item => item.value())
                         .reduce( (sumTotal,value) => sumTotal+value, 0)
    }


}