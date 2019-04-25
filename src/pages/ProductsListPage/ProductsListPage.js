import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductsList/ProductItem';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { actionFetchProductsRequest, actionDeleteProductRequest } from '../../actions/index'

class ProductsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.onDelete = this.onDelete.bind(this)
  };
  componentWillMount() {
    this.props.fetchProducts()
  }
  onDelete(id){
    this.props.onDeleteProduct(id)
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem product={product} key={index} index={index} onDelete = {this.onDelete}/>
      })
    };
    return result
  };
  componentWillReceiveProps(nexProps){
    this.setState(state=>{
      return {
        products: nexProps.products
      }
    })
  }
  render() {
    var { products } = this.state;
    return (
      <div id="products-page position-relative" >
          <Header />
        <div className="container ">
          <div className="container position-absolute">
            <ProductsList  >
              {this.showProducts(products)}
            </ProductsList>
            <Link to = "/action-product-page" className="btn btn-dark" href="#" role="button">Add Product</Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProducts: () => {
      dispatch(actionFetchProductsRequest())
    },
    onDeleteProduct: (id) => {
      dispatch(actionDeleteProductRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);