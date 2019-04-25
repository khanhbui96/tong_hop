import React, {Component} from 'react';

class ActionProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
                id : '',
                brand: '',
                name: '',
                price: '',
                status: ''
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this)
    };
    componentWillMount(){
        this.setState(state=>{
            return {
                ...this.props.product
            }
        })
    }
    onHandleChange(e){
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState(state=>{
            return{
                    [name]: value
                }
            }
        )
    };
    onHandleSubmit(e){
        e.preventDefault();
        let {history} = this.props;
        console.log(this.state)
        if(this.state.id){
            let {updateProduct, history} = this.props;
            updateProduct(this.state);
            
        }else{
            let {addProduct, history} = this.props;
            addProduct(this.state);
        };
        history.goBack();
        
    }
    render(){
        const {brand, name, price, status} = this.state;
        return(
            <div className="body" style={{marginTop: 100}}>
                <div className="card container" style={{width: 400}}>
                    <h5 className="card-header bg-dark white-text text-center py-4">
                        <strong>Add product</strong>
                    </h5>
                    <div className="card-body px-lg-5">
                        <form onSubmit={this.onHandleSubmit} >
                            <div className="md-form mt-3">
                                <input type="text" className="form-control" value={brand} name="brand" onChange={this.onHandleChange}/>
                                <label className={brand.length>0 ? 'active': ''}>Brand</label>
                            </div>
                            <div className="md-form mt-3">
                                <input type="text" className="form-control" value={name} name="name" onChange={this.onHandleChange}/>
                                <label className={name.length>0 ? 'active': ''} >Name</label>
                            </div>
                            <div className="md-form mt-3">
                                <input type="text" className="form-control" value={price} name="price" onChange={this.onHandleChange}/>
                                <label className={price.length>0 ? 'active': ''} >Price</label>
                            </div>
                            <div className="md-form mt-3">
                                <input type="text" className="form-control" value={status} name="status" onChange={this.onHandleChange}/>
                                <label className={status.length>0 ? 'active': ''} >Status</label>
                            </div>
                            <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Add</button>
                        </form>
                    </div>
                
                </div>

            </div>
        )
    }
}
export default ActionProduct