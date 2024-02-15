import React, { useEffect } from 'react'
import Layout from '../../components/Layout';
import { useDispatch } from 'react-redux';
import { getProductDetailsById } from '../../actions';

/**
* @author
* @function ProductDetailsPage
**/

export const ProductDetailsPage = (props) => {



  const dispatch = useDispatch();

  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);

    const payload = {
    params: {
    productId
    }

    }

    dispatch(getProductDetailsById(payload));
  }, []);

  return (
    <Layout>
      <div>Product Details Page</div>
    </Layout>
  )

}

export default ProductDetailsPage;