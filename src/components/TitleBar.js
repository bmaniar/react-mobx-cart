import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('cartStore')
@observer
export default class TitleBar extends React.Component {
  render() {
    return (
      <div className="home-page">
      Total Number of Items in Cart: {this.props.cartStore.count}
      </div>
    );
  }
}
