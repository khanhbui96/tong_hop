import {combineReducers} from 'redux';
import products from './products'
import items from './items';
import cart from './cart'
const AppReducer = combineReducers({
    products,
    items,
    cart
});
export default AppReducer