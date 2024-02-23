import React from "react";
import Card from "../../components/UI/Card";



const PriceDetails = (props) => {
    return (
        <Card headerLeft={"Price Details"} style={{maxWidth:"380px"}}>
            <div style={{
                padding: "20px",
                boxSizing: "border-box",
            }}
            >
                <div className="flexRow sb" style={{margin: "10px 0"}}>
                    <div>Price ({props.totalItem} items)</div>
                    <div>{props.totalPrice}</div>
                </div>
                <div className="flexRow sb" style={{margin: "10px 0"}}>
                    <div>Frais de Livraison</div>
                    <div>DEPEND DE LA DESTINATION</div>
                </div>
                <div className="flexRow sb" style={{margin: "10px 0"}}>
                    <div>Montant Total</div>
                    <div>{props.totalPrice}</div>
                </div>
            </div>
        </Card>
    );
};

export default PriceDetails;