import React from 'react'
import { generatePublicUrl } from '../../../urlConfig';
import './style.css'

/**
* @author
* @function CartItem
**/

export const CartItem = (props) => {

    const {
        _id, name, price, qty, img
    } = props.cartItem;
    return (
        <div className='cartItemContainer'>
            <div className='flexRow'>
                <div className='cartProImgContainer'>
                    <img src={generatePublicUrl(img)} alt={''} />
                </div>
                <div className='cartItemDetails'>
                    <div>
                        <p>{name}</p>
                        <p>{price} FCFA</p>
                    </div>
                    <div>Livrer entre 2 - 3 jours</div>
                </div>
            </div>
            <div
            style={{
                    display: 'flex',
                    margin: '5px 0'
                }}>
                {/* quantity control */}
                <div className='quantityControl'>
                    <button>-</button>
                    <input value={qty} readOnly />
                    <button>+</button>
                </div>
                <button className='cartActionBtn'>Sauvegarder</button>
                <button className='cartActionBtn'>Supprimé</button>
            </div>
        </div> // Add closing curly brace here
    );
}

export default CartItem;