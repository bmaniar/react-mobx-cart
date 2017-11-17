import React from 'react';
import { inject} from 'mobx-react';

@inject('cartStore')
export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [{
            id: 0,
            name: "Buy milk"
          }, {
            id: 1,
            name: "Write unit tests"
          }, {
            id: 2,
            name: "Cook a meal"
          }]
        }
        this.handleClick = this.handleClick.bind(this);
      }
  
    handleClick = e => {
        this.props.cartStore.addToCart(e);    
    } 
    renderTodos() {
        return this.state.items.map((item, idx) => {
            return (<li  key = {idx} >
                {item.name} 
                <button onClick = {() => this.handleClick(item)} > Add to Cart </button>
            </li>)
        })
    } 
    render() {
        return (
        <div>
            <h2>Product List</h2>
            <ul>
                {this.renderTodos()}
            </ul>
        </div>
        );
    }
}
