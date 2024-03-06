import React from "react";

/**
 * @author
 * @function Price
 **/

const Price = (props) => {
  return (
    <div
      style={{
        fontSize: props.fontSize ? props.fontSize : "14px",
        fontWeight: "bold",
        margin: "5px 0",
      }}
    >
      
      {props.value} FCFA
    </div>
  );
};

export default Price;