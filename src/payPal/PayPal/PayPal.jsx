import "./PayPal.css";
import React, { useEffect, useRef } from "react";
function PayPal() {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (date, actions, err) => {
          console.log(date, err);
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "PayPal",
                amount: {
                  currency_code: "ILS",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(data);
          console.log("Succesful order" + order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return <div ref={paypal}></div>;
}

export default PayPal;
