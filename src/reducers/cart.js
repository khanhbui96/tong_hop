import { FETCH_CART, DELETE_CART_ITEM, ADD_TO_CART } from '../constants/actionTypes';

const initialState = [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART:
            state = action.cart;
            return [...state];
        case ADD_TO_CART:
            var item = {
                product: action.product,
                amount: 1
            };
            console.log(state)
            var index = -1;
            state.forEach((element, i) => {
                if (element.product.id === action.product.id) {
                    item = {
                        ...element,
                        amount: element.amount+1
                    }
                    index = i
                }
            });
            if(index !== -1 ){
                state.splice(index, 1, item)
            }else(state.push(item))
            return [...state];
        case DELETE_CART_ITEM:
            state = state.filter(item => {
                return item !== action.item
            });
            return [...state]
        default:
            return state;
    }
};
export default cart;