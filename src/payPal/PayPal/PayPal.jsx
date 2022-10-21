import "./PayPal.css";
import React, { useEffect, useRef } from "react";
import { useShoppingContext } from "../../context/SurfBoardContext";
function PayPal() {
  const { surfItem } = useShoppingContext();
  const paypal = useRef()
  useEffect(()=>{
    window.paypal.Buttons({
      createOrder:(date,actions,err)=>{
        console.log(date,err);
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description:"PayPal",
              amount:{
                currency_code:"ILS",
                value:650.00
              }
            }
          ]
        })
      },
      onApprove:async (data,actions)=>{
        const order = await (actions.order.capture())
        console.log(data);
        console.log("Succesful order" + order);
      },
      onError:(err)=>{
        console.log(err);
        surfItem = []
      }
    }).render(paypal.current)
  },[])
  return (
      <div ref={paypal}></div>
  );
};

export default PayPal;
