/* eslint-disable react/prop-types */
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal= ({ total, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": `${import.meta.env.VITE_PAYPAL_CLIENT_ID}`,
        currency: "EUR",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
        //  if (Math.random() > 0) { 
        //         return Promise.reject(new Error('Failed to create order. Please try again.'));
        //       }
          return actions.order.create({
            purchase_units: [
              {
                description: "Musical instruments",
                amount: {
                  currency_code: "EUR",
                  value: Number(total),
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          onSuccess(order);
        }}
        onError={(err) => {
          onError(err);
        }}
        style={{ color: "blue", shape: "rect", label: "pay" }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;