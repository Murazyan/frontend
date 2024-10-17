import { Cart } from "./CartData";

export class CartItemModel{

    cart: Cart;
    public currentImageIndex = 0;
    protected images :string[];
    public clickedCount: number;
    public diabled: boolean;
    public index: number;
    public isOriginal: boolean;

    constructor(cart: Cart, index: number){
        this.cart = cart;
        this.clickedCount =4;
        this.currentImageIndex = 0;
        this.images = [];
        this.diabled = false;
        this.index = index;
        this.images.push('assets/images/carts/card.jpg');
        this.images.push('assets/images/carts/'+this.cart.name);
        this.isOriginal = false;
    }

    public decreaseClickedCount() {
        if (this.clickedCount > 0)
            --this.clickedCount
    }
}