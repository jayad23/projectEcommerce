import React, {useContext} from "react";
import ReactDOM from "react-dom";
import "./Checkout.styles.css"
import ProductContext from "../../Context/ProductsContext"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const Checkout = () => {

    const {state} = useContext(ProductContext)

  const createOrder = (data, actions) => {

    return actions.order.create({

        
      purchase_units: [
        {
          amount: {
            value: state.priceTotal,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  const handlerPrice = () => {
    
  }

  return (
    <div className="container-paypal">
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
        <h3 className="text-center bg-black text-white py-2">{`Total: ${state.priceTotal}`}</h3>
    </div>
  );
};

export default Checkout;
