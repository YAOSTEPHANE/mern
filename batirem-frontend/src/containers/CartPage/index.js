import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import './style.css';
import { addToCart, getCartItems } from '../../actions';
import { MaterialButton } from '../../components/MaterialUI';



/**
* @author
* @function CartPage
**/

export const CartPage = (props) => {

    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
    //const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);
    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems());
        }
    }, [auth.authenticate]);

    const onQuantityIncrement = (_id, qty) => {
        //console.log({_id, qty});
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, 1));
    }
    const onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, -1));
    }

    return (
        <Layout>
            <div className='cartContainer' style={{ alignItems: 'flex-start' }}>
                <Card headerLeft={`Mon Panier`} headerRight={<div>Livrer à</div>}
                    style={{ width: 'calc(100% - 400px', overflow: 'hidden' }}
                >
                    {
                        Object.keys(cartItems).map((key, index) =>
                            <CartItem
                                key={index}
                                cartItem={cartItems[key]}
                                onQuantityInc={onQuantityIncrement}
                                onQuantityDec={onQuantityDecrement}
                            />

                        )
                    }

                    <div style={{
                        width: '100%',
                        display: 'flex',
                        background: '#ffffff',
                        justifyContent: 'flex-end',
                        boxShadow: '0 0 10px 10px #eee',
                        padding: '10px 0',
                        boxSizing: 'border.box'
                    }}>
                        <div style={{ width: '250px' }}>
                            <MaterialButton
                                title="COMMANDER"
                                onClick={() => props.history.push(`/checkout`)}
                            />
                        </div>
                    </div>
                </Card>
                <Card headerLeft='Prix Total' style={{ width: '380px' }}>
                </Card>

            </div>
        </Layout>
    )

}

export default CartPage;