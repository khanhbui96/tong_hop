import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {
    render() {
        return (
            <div className="container row" style={{marginTop: 50}}>
                {this.props.children}
            </div>
        )
    }
}

export default ProductsList