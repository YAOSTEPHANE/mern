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
        case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
            case cartConstants.ADD_TO_CART_SUCCESS:
                state = {
                    ...state,
                    cartItems: action.payload.cartItems,
                    updatingCart:false
                }
                break;
                case cartConstants.ADD_TO_CART_FAILURE:
                    state = {
                        ...state,
                        updatingCart:false,
                        error: action.payload.error
                    }
                    break;
                    case cartConstants.RESET_CART:
                        state = {
                            ...initState
                        }
    }
    return state;
}
