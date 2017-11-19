import React from 'react';
import { inject} from 'mobx-react';

@inject('cartStore')
export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [{
            id: 0,
            name: "Buy milk",
            price: 200
          }, {
            id: 1,
            name: "Write unit tests",
            price: 1000
          }, {
            id: 2,
            name: "Cook a meal",
            price: 500
          }]
        }
        this.handleClick = this.handleClick.bind(this);
      }
  
    handleClick = e => {
        this.props.cartStore.addToCart(e);    
    } 
    renderProducts() {
        return this.state.items.map((item, idx) => {
            return (<tr>
                <td  key = {idx} >
                {item.name} </td><td>{item.price}</td><td>
                <button onClick = {() => this.handleClick(item)} > Add to Cart </button>
            </td></tr>)
        })
    } 
    render() {
        return (
        <div>
            <h2>Product List</h2>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {this.renderProducts()}
            </table>
        </div>
        );
    }
}
