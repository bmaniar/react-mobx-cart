import { observable, action, computed, reaction } from 'mobx';

class CartStore {
    @observable productsInCart = [];

    @computed get count() {
        return this.productsInCart.length;
    }
    @action.bound
    addToCart(product) {
        this.productsInCart.push(product);
    }
    @action.bound
    removeFromCart(product) {
      const index = this.productsInCart.indexOf(product);
      if (index >= 0) {
        this.productsInCart.splice(index, 1);
      }
    }
    @action.bound
    fetchCart() {
        return this.productsInCart;
    }
} 
export default new CartStore();