import { observable, action, computed, reaction } from 'mobx';

export default class Cart {
    @observable productsInCart = [];

    @computed get count() {
        return this.productsInCart.length;
    }
} 