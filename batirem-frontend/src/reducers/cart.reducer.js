import {cartConstants} from '../actions/constants';


const initState = {
    cartItems: {
        // '1': {
        //     _id: 1,
        //     name: 'Product 1',
        //     img: 'some.jpg',
        //     price: 100,
        //     qty: 1
        // }
    }
    
};

export default (state = initState, action) => {
    switch(action.type){
        case cartConstants.ADD_TO_CART:
            state = {
                ...state,
                cartItems: action.payload.cartItems
            }
            break;
    }
    return state;
}
