import React from "react";
import Card from "../../components/UI/Card";



const PriceDetails = (props) => {
    return (
        <Card headerLeft={"Details du Prix"} style={{maxWidth:"380px"}}>
            <div style={{
                padding: "20px",
                boxSizing: "border-box",
            }}
            >
                <div className="flexRow sb" style={{margin: "10px 0"}}>
                    <div>Prix ({props.totalItem} articles)</div>
                    <div>{props.totalPrice}</div>
                </div>
                <div className="flexRow sb" style={{margin: "10px 0"}}>
                    <div>Frais de Livraison</div>
                    <div>Gratuit</div>
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