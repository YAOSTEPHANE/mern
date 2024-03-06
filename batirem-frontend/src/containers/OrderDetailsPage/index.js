import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getOrder} from '../../actions';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import "./style.css";



const OrderDetailsPage = (props) => {

    const dispatch = useDispatch();
    const orderDetails = useSelector(state => state.user.orderDetails);


    useEffect(() => {
        console.log({props});
        const payload = {
            orderId: props.match.params.orderId
        }
        dispatch(getOrder(payload));
    }, []);

    if(!(orderDetails && orderDetails.address)) {
        return null;
    }

    return (
        <Layout>
            <div style={{ 
                width: "1160px",
                margin: '10px auto'
             }}
             >
                <Card style={{
            margin: "10px 0",
          }}>
                    <div className="delAdrContainer">
                        <div className="delAdrDetails">
                            <div className="delTitle">Addresse de Livraison</div>
                            <div className="delName">{orderDetails.address.name}</div>
                            <div className="delAddress">{orderDetails.address.locality} -{orderDetails.address.address} - 
                            {orderDetails.address.cityDistrictTown} - 
                            {orderDetails.address.landmark}</div>
                            <div className="delPhoneNumber">
                            Numero de telephone {orderDetails.address.mobileNumber}
                            </div>
                        </div>
                        <div className="delMoreActionContainer">
                            <div className="delTitle">Plus Actions</div>
                            <div className="delName">Telecharger le reçu</div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className=''>
                        <div>articles</div>
                        <div>status de commande</div>
                        <div>status de commande</div>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}

export default OrderDetailsPage;