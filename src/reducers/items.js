import { FETCH_ITEMS } from '../constants/actionTypes';
const initialState = [];

const items = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            state = action.items;
            return [...state];
        default:
            return state;
    }
};
export default items;