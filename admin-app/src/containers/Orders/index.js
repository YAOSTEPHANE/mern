import React from 'react';
import Layout from '../../components/Layout';
import { useSelector } from 'react-redux';
import Card from '../../components/UI/Card';
import './style.css';

/**
* @author
* @function Orders
**/

const Orders = (props) => {
  const order = useSelector((state) => state.order);

  return (
    <Layout sidebar>
    {
      order.orders.map((orderItem, index) => (
        <Card key={index} headerLeft={orderItem._id}>
        <div style={{
          boxSizing: "border-box",
          padding: "100px",
        }}>
          <div className='orderTrack'>
            <div className="orderStatus">
              <div className="point"></div>
              <div className="orderInfo">
                <div className="status">Commande passée</div>
                <div className='date'>Fri, 2024</div>
              </div>
            </div>
            <div className="orderStatus">
              <div className="point"></div>
              <div className="orderInfo">
                <div className="status">Emballé</div>
                <div className='date'>Fri, 2024</div>
              </div>
            </div>
            <div className="orderStatus">
              <div className="point"></div>
              <div className="orderInfo">
                <div className="status">Envoyé</div>
                <div className='date'>Fri, 2024</div>
              </div>
            </div>
            <div className="orderStatus">
              <div className="point"></div>
              <div className="orderInfo">
                <div className="status">Livré</div>
                <div className='date'>Fri, 2024</div>
              </div>
            </div>
          </div>


          
        </div>
      </Card>
      ))
    }
     
    </Layout>
  );

}


export default Orders;