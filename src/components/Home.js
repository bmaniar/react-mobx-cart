import React from 'react';
import { inject, observer } from 'mobx-react';

import TitleBar from './TitleBar';
import ProductList from './ProductList';
import Cart from './Cart';
@inject('cartStore')
@observer
export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
      {/* <button 
      onClick={() => {this.props.cartStore.addToCart('1')}}
      >Add to Cart</button> */}
      <TitleBar/>
      <ProductList/>
      <Cart/>
      </div>
    );
  }
}
