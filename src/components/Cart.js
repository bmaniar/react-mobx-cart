import React from 'react';
import { inject, observer} from 'mobx-react';
import CartItem from './CartItem';
@inject('cartStore')
@observer
export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        }
    }
    componentWillMount(){
        var items = this.props.cartStore.fetchCart();
        this.setState({ items: items });
    }
    render() {
        return (
        <div>
            <h2>Cart</h2>
            <table>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
                {
                    this.state.items.map((item, idx) => {
                        return (<CartItem item={item} key={idx}/>)
                    })
                }
            <tr>
                <th>
                    Total Amount
                </th>
                <th>
                    {this.props.cartStore.totalAmount}
                </th>
            </tr>
            </table>
        </div>
        );
    }
}
