import React from 'react';
import Layout from '../../components/Layout';
import './style.css';
import ProductStore from './ProductStore';


/** 
 * @auteur
 * @fonction ProductListPage
 **/

const ProductListPage = (props) => {
 

    return (
        <Layout>
         <ProductStore {...props} />
        </Layout>
    )
}


export default ProductListPage;