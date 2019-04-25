import {
    FETCH_PRODUCTS,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    ADD_PRODUCT,
    FETCH_ITEMS,
    ADD_TO_CART,
    FETCH_CART,
    DELETE_CART_ITEM
} from '../constants/actionTypes';
import callApi from '../callApi/callApi';
import {findIndex} from '../utils/index'

export const actFetchProducts = (products)=>{
    return {
        type: FETCH_PRODUCTS,
        products
    }
};
export const actionFetchProductsRequest = ()=>{
    let fetchProducts = async dispatch =>{
        try{
            let res = await callApi('get', 'products', null);
            dispatch(actFetchProducts(res.data))
        }catch(err){
            console.log(err)
        }
    }
    return fetchProducts
};
export const actDeleteProduct = (id)=> {
    return {
        type: DELETE_PRODUCT,
        id
    }
};
export const actionDeleteProductRequest = (id)=>{
    return async dispatch =>{
        try{
            let res = await callApi('delete', `products/${id}`, null);
            dispatch(actDeleteProduct(id))
        }catch(err){
            console.log(err)
        }
    }
};
export const actAddProduct = (product)=>{
    return async dispatch => {
        try{
            let res = await callApi('post', 'products', product)
            dispatch({
                type: ADD_PRODUCT,
                product
            })
        }catch(err){
            console.log(err)
        }
    }
}
export const actUpdateProduct = (product)=>{
    return async dispatch => {
        try{
            let res = await callApi('put', `products/${product.id}`, product);
            dispatch({
                type: UPDATE_PRODUCT,
                product
            })
        }catch(err){
            console.log(err)
        }
    }
};
export const fetchItems = ()=>{
    return async dispatch => {
        try{
            let res = await callApi('get', 'items', null);
            dispatch({
                type: FETCH_ITEMS,
                items: res.data
            })

        }catch(err){
            console.log(err)
        }
    }
};
export const addToCart = (product) => {
    
    return async dispatch => {
        try{
            var cartItem = {
                product: product,
                amount: 1
            };
            var res = await callApi('get', 'cart', null);

            if(res.data.length>0){
                var result = -1;
                res.data.forEach(async item => {
                    if(item.product.id === cartItem.product.id){
                        result = item.id;
                        cartItem = {
                            ...item,
                            amount: item.amount+1
                        }
                    }
                });
                if(result !==-1){
                    await callApi('put', `cart/${result}`, cartItem );
                }else{
                    await callApi('post', 'cart', cartItem );
                }
            }else{
                await callApi('post', 'cart', cartItem );
            }
            
            dispatch({
                type: ADD_TO_CART,
                product
            })
        }catch(err){
            console.log(err)
        }
    }
};
export const fetchCart = ()=>{
    return async dispatch => {
        try{
            const res = await callApi('get', 'cart', null);
            dispatch({
                type: FETCH_CART,
                cart: res.data
            })
        }catch(err){
            console.log(err)
        }
    }
};
export const deleteCartItem = (item)=>{
    return async dispatch => {
        try{
            const res = await callApi('delete', `cart/${item.id}`, null);
            dispatch({
                type: DELETE_CART_ITEM,
                item
            })
        }catch(err){
            console.log(err)
        }
    }
}
