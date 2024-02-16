import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './style.css';



/**
* @author
* @function CartPage
**/

export const CartPage = (props) => {

    const cart = useSelector(state => state.cart);
    const cartItems = cart.cartItems;

    return (
        <Layout>
            <div className='cartContainer'>
                <Card headerLeft={`Mon Panier`} headerRight={<div>Livrer à</div>}>
                    {
                        Object.keys(cartItems).map((key, index) => 
                        <CartItem 
                        key={index}
                        cartItem={cartItems[key]}
                        />

                        )
                    }

                </Card>
                <Card style={{ width: '500px' }}>
                    Prix
                </Card>

            </div>
        </Layout>
    )

}

export default CartPage;