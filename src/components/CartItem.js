import React from 'react';
import { inject, observer} from 'mobx-react';

@inject('cartStore')
@observer
export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = e => {
        this.props.cartStore.removeFromCart(e);    
    } 
    render() {
        let {item}= this.props;
        return (
            <li>
                {item.name} 
                <button onClick = {() => this.handleClick(item)} > Remove </button>
            </li>
        );
    }
}
