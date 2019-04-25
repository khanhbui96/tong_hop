import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component{
    
    onDelete(id){
        return ()=>{
            this.props.onDelete(id)
        }
    };
    onUpdate(product){
        return ()=>{
            this.props.onUpdate(product)
        }
    }
    render(){
        var {id, brand, name, price, status} = this.props.product;
        
        var {updateProduct, product} = this.props;
        var {index} = this.props;
        var color = status === true ? 'btn-primary' : 'btn-danger';
        return(
            <tr className = 'text-dark'>
                  <td scope="row">{index+1}</td>
                    <td>{brand}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td><span className={`badge badge-pill ${color}`}>{status? 'còn hàng': 'hết hàng'}</span></td>
                    <td>
                        <Link to={`products/${id}/update`}  className="btn btn-primary btn-rounded btn-sm mr-2"  role="button" >Sửa</Link>
                        <a  className="btn btn-danger btn-rounded btn-sm " href="#" role="button" onClick={this.onDelete(id)}>Xóa</a>
                    </td>
            </tr>
        )
    }
};
export default ProductItem;