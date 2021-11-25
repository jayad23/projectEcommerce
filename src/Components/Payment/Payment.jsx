import React, { useRef, useEffect, useContext } from "react";
import ProductsContext from '../../Context/ProductsContext'
import './Payment.css'

export default function Payment() {
  const paypal = useRef();
  const {state} = useContext(ProductsContext)
  const value = state?.priceTotal
    console.log(value)
  useEffect(() => {
    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: {value},
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div className='paypal-container' ref={paypal}></div>
    </div>
  );
}
