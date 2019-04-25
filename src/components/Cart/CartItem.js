import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var {name, price} = this.props.item.product
        return (
            <tr>
                <th scope="row">1</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{this.props.item.amount}</td>
                <td>
                    <a onClick= {()=>this.props.deleteCartItem(this.props.item)}>
                        <i className="fas fa-eraser" />
                    </a>
                </td>
            </tr>
        )
    }
};
export default CartItem