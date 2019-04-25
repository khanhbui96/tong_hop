import React, {Component} from 'react';
import CartItem from './CartItem'
class Cart extends Component{
    render(){
        return(
            <div className="modal-dialog bg-dark" role="document" style={{width: 400, marginTop: 50}}>
                <div className="modal-content ">
                  <div className="modal-header">
                    <h4 className="modal-title font-weight-bold dark-grey-text" id="myModalLabel">Your cart</h4>
                  </div>
                  <div className="modal-body">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product name</th>
                          <th>Price</th>
                          <th>Amount</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.children}
                      </tbody>
                    </table>
                    <button className="btn btn-primary btn-rounded btn-sm">Checkout</button>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-grey btn-rounded btn-sm" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
        
        )
    }
}

export default Cart