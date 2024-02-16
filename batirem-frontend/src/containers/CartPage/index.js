import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import {useSelector} from 'react-redux';
import './style.css';
/**
* @author
* @function CartPage
**/

export const CartPage = (props) => {
  return(
    <Layout>
    <div className='cartContainer'>
        <Card headerLeft={`Mon Panier`} headerRight={<div>Livrer à</div>}>
            <div className='flexRow'>
                <div className='cartProductContainer'>
                    <img src='' alt='' />
                </div>
                <div className='cartItemDetails'>
                    <div>
                        Nom du Produit
                    </div>
                    <div>Livrer entre 2 - 3 jours</div>
                    
                </div>
            </div>
        </Card>
        <Card style={{width: '500px'}}>
        Prix
        </Card>
            
    </div>
    </Layout>
   )

 }

 export default CartPage;