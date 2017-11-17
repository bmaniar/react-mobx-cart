import React from 'react';
import { inject, observer} from 'mobx-react';

@inject('cartStore')
@observer
export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    ComponentWillMount(){
        var items = this.props.cartStore.fetchCart();
        this.setState({ items: items });
    }
    handleClick = e => {
        this.props.cartStore.removeFromCart(e);    
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
            <h2>Cart</h2>
            <ul>
                {this.renderTodos()}
            </ul>
        </div>
        );
    }
}
