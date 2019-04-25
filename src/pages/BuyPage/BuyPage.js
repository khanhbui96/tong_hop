import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';
import Modal from 'react-responsive-modal';
import ProductsSell from '../../components/ProductsSell/ProductsList';
import Footer from '../../components/Footer/Footer';
import ProductItem from '../../components/ProductsSell/ProductItem';
import CartItem from '../../components/Cart/CartItem'
import {connect} from 'react-redux';
import {fetchItems, addToCart, fetchCart, deleteCartItem} from '../../actions/index';
class BuyPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      cart: [],
      name: ''
    };
  
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  }
  
  showItems(items){
    var result = null;
    if(items.length>0){
      result = items.map((item, index)=>{
        return <ProductItem key={index} product = {item} addToCart = {this.props.addToCart}/>
      })
    }
    return result ;
  };
  showCart(cart){
    var result = null;
    const {deleteCartItem} = this.props;
    if(cart.length>0){
      result = cart.map((item, index)=>{
        return <CartItem key={index} item = {item} deleteCartItem = {deleteCartItem}/>
      })
    }
    return result
  }
  componentWillMount(){
    const {items, fetchItems, fetchCart} = this.props;
    fetchItems();
    fetchCart()
  }
  componentWillReceiveProps(nextProps, prev){
    this.setState(state=>{
      return{
        cart: [...nextProps.cart]
      }
    });
  } 
  
  render() {
    const { open, cart} = this.state;
    const {items} = this.props
    return (
      <div className="">
        <Header >
          <a className="nav-link dark-grey-text font-weight-bold" href="#" data-toggle="modal" data-target="#cart-modal-ex">
            <span className="clearfix d-none d-sm-inline-block  " onClick={this.onOpenModal}><i className="fas fa-shopping-cart white-text mr-2" aria-hidden="true" />Cart  </span><span> ({cart.length})</span>
          </a>
          <Modal open={open} onClose={this.onCloseModal} center >
            <Cart >
              {this.showCart(cart)}
            </Cart>
        
          </Modal>
        </Header>

        <div className="container mt-5 ">
          <div className="container position-absolute">
            <ProductsSell>
              {this.showItems(items)}
            </ProductsSell>
            <Footer/>
          </div>
          
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    cart: state.cart
  }
};
const mapDispatchToProps = (dispatch, props)=>{
  return {
    fetchItems: ()=>{
      dispatch(fetchItems())
    },
    addToCart: (item)=>{
      dispatch(addToCart(item))
    },
    fetchCart: ()=>{
      dispatch(fetchCart())
    },
    deleteCartItem: (item)=>{
      dispatch(deleteCartItem(item))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (BuyPage);