import React, { useEffect } from 'react';
import { getProductPage } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import getParams from '../../../utils/getParams';


const Product = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    useEffect(() => {
        const params = getParams(props.location.search);
        console.log({params});
        const payload = {params}
        dispatch(getProductPage(payload));
    }, []);

    return (
        <>
        
        </>
    )
}

export default Product;