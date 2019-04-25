import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this)
    }
    showRating(rating){
        var arr = [];
        for(let i = 0; i < rating; i++){
            arr.push(<li><i className="fas fa-star blue-text" /></li>)
        };
        return arr
    };
    addToCart(item){
        return ()=>{
            this.props.addToCart(item)
        }
    }
    render() {
        const {id, name, rating, price} = this.props.product;
        return (
            <div className="product col-lg-4 col-md-12 mb-4">
                <div className="card card-ecommerce ">
                    <div className="view overlay bg-dark">
                        <img src="https://assets.pcmag.com/media/images/517659-apple-macbook-pro-15-inch.jpg?width=810&height=456" className="img-fluid" alt />
                        <a>
                            <div className="mask rgba-white-slight" />
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ color: '#fff' }}>
                        <h5 className="card-title mb-1"><strong><a href className="dark-grey-text">{name}</a></strong></h5>
                        <span className="badge badge-danger mb-2">bestseller</span>
                        <ul className="rating">
                            {this.showRating(rating)}
                        </ul>
                        <div className="card-footer pb-0 ">
                            <div className="row mb-0 d-flex justify-content-center">
                                <span className="float-left"><strong>{price}</strong></span>
                                <span className="float-right">
                                    <a className data-toggle="tooltip" data-placement="top" title="Add to Cart" onClick={this.addToCart(this.props.product)}><i className="fas fa-shopping-cart ml-3" /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default ProductItem