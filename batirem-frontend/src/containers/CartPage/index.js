import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import './style.css';
import { addToCart } from '../../actions';



/**
* @author
* @function CartPage
**/

export const CartPage = (props) => {

    const cart = useSelector(state => state.cart);
    //const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    const onQuantityIncrement = (_id, qty) => {
        //console.log({_id, qty});
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img}, 1));
    }
    const onQuantityDecrement = (_id, qty) => {
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img}, -1));
    }

    return (
        <Layout>
            <div className='cartContainer' style={{alignItems:'flex-start'}}>
                <Card headerLeft={`Mon Panier`} headerRight={<div>Livrer à</div>}>
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

                </Card>
                <Card headerLeft='Prix Total' style={{ width: '500px' }}>
                </Card>

            </div>
        </Layout>
    )

}

export default CartPage;