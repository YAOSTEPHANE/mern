import { cartConstants } from './constants';
import store from '../store';
import axios from '../helpers/axios';




const getCartItems = () => {
    return async dispatch => {
        try {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
            const res = await axios.post(`/user/getCartItems`);
            if (res.status === 200) {
                const { cartItems } = res.data;
                console.log({ getCartItems: cartItems })
                if (cartItems) {
                    dispatch({
                        type: cartConstants.ADD_TO_CART_SUCCESS,
                        payload: { cartItems }
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const addToCart = (product, newQty = 1) => {
    return async dispatch => {
        const { cart: {
            cartItems
        },
            auth } = store.getState();
        //console.log('action::products', products);
        // const product = action.payload.product;
        // const products = actions.payload.products;
        const qty = cartItems[product._id] ? parseInt(cartItems[product._id].qty + newQty) : 1;
        cartItems[product._id] = {
            ...product,
            qty
        };
        if (auth.authenticate) {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
            const payload = {
                cartItems: [{
                    product: product._id,
                    quantity: qty
                }]
            };
            console.log(payload);
            const res = await axios.post(`/user/cart/addtocart`, payload);
            console.log(res);
            if(res.status === 201) {
                dispatch(getCartItems());
            }
        }else{
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }

        console.log('addToCart::', cartItems);

        dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: {cartItems}
        })
    }
}

export const updateCart = () => {
    return async dispatch => {
        const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;

        if (cartItems) {
            dispatch({
                type: cartConstants.ADD_TO_CART,
                payload: { cartItems }
            });
        }
    }
}