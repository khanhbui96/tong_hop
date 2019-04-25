import {FETCH_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } from '../constants/actionTypes';
import {findIndex} from '../utils/index';
const initialState = [];

const products = (state = initialState, action)=>{
    switch( action.type){
        case UPDATE_PRODUCT:
            console.log('update');
            var index = findIndex(state, action.product.id);
            state.splice(index, 1, action.product );
            return [...state]
        case ADD_PRODUCT:
            console.log('add');
            state.push(action.product);
            return [...state];
        case FETCH_PRODUCTS:
            state = action.products;
            console.log('fetch')
            return [...state];
        case DELETE_PRODUCT:
            console.log('delete');
            var index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        default:
            console.log('default')
            return [...state];
    }
};
export default products