import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { Breed } from "../../components/MaterialUI";
import { generatePublicUrl } from "../../urlConfig";



const OrderPage = (props) => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getOrders());
    }, []);
    console.log(user);
    return (
        <Layout>
            <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
                <Breed
                    breed={[
                        { name: "Accueil", href: "/" },
                        { name: "Mon Compte", href: "/account" },
                        { name: "Mes Commandes", href: "/account/orders" },
                    ]}
                    breedIcon={<IoIosArrowForward />}
                />
                {user.orders.map((order) => {
                    return order.items.map((item) => (
                        <Card style={{ display: 'block', margin: "5px auto" }}>
                            <Link 
                            to={`/order_details/${order._id}`}
                            className="orderItemContainer" >
                                <div className="orderImgContainer">
                                    <img
                                        className="orderImg"
                                        src={generatePublicUrl(
                                            item.productId.productPictures[0].img)}
                                        alt=""
                                    />
                                </div>
                                <div className="orderRow">
                                    <div className="orderName">{item.productId.name}</div>
                                    <div className="orderPrice">{item.payablePrice} FCFA</div>
                                    <div>{order.paymentStatus}</div>
                                </div>
                            </Link>
                        </Card>
                    ));
                })}
            </div>
        </Layout>
    );

};

export default OrderPage;