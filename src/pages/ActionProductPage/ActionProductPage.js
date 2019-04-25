import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';
import ActionProduct from '../../components/ActionProduct/ActionProduct';
import {actAddProduct, actUpdateProduct} from '../../actions/index';
import {connect} from 'react-redux'
import  {findItem} from '../../utils/index';

class ActionProductPage extends Component {
  componentWillMount(){
    var {products, match} = this.props;
    if(match){
      var id = match.params.id;
    var product = findItem(products, id);
    this.setState(state =>{
      return {
        ...product
      }
    })
    }
  }
  render() {
    var {addProduct, history ,updateProduct} = this.props ;
    console.log(this.state)
    return (
      <div className="">
        <Header/>
        <ActionProduct addProduct = {addProduct} history={history} updateProduct={updateProduct} product ={this.state} />
        <Footer/>
      </div>
    );
  }
}
var mapStateToProps = state => {
  return {
    products: state.products
  }
};
var mapDispatchToProps = (dispatch, props)=>{
  return {
    addProduct: product => {
      dispatch(actAddProduct(product))
    },
    updateProduct: product => {
      dispatch(actUpdateProduct(product))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ActionProductPage);
