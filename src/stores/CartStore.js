import { observable, action, computed, reaction } from 'mobx';

class CartStore {
    @observable productsInCart = [];

    @computed get count() {
        return this.productsInCart.length;
    }
    @action addToCart(product) {
        this.productsInCart.push(product);
    }
} 
export default new CartStore();