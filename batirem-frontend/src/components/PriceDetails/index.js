import React from "react";
import Card from "../../components/UI/Card";

/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <Card headerLeft={"Details Prix"} style={{ maxWidth: "380px" }}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Prix FCFA ({props.totalItem} articles)</div>
          <div>{props.totalPrice} FCFA</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Frais de LIvraison</div>
          <div>GRATUIT</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Montant Total</div>
          <div>{props.totalPrice} FCFA</div>
        </div>
      </div>
    </Card>
  );
};

export default PriceDetails;