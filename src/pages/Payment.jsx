/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../stores/cart";
import { products } from "../utils/products";
import CartItem from "../components/cart/CartItem";
import { useEffect, useRef, useState } from "react";

const Payment = () => {
  const carts = useSelector((store) => store.cart.items);
  const paypal = useRef();
  const dispatch =  useDispatch();
  const[isSuccess, setIsSuccess] = useState(false)
  const[isError, setIsError] = useState(false)
  
  const total = carts.reduce((acc, item) => {
    const product = products.find((product) => item.productId === product.id);
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

  useEffect(() => {

    if (total > 0 && paypal.current) {
    paypal.current.innerHTML = ""; 
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Musical instruments",
                amount: {
                  currency_code: "EUR",
                  value: Number(total),
                },
                // shipping: {
                //   address: {
                //     address_line_1: '', 
                //     address_line_2: '',
                //     admin_area_2: '', 
                //     admin_area_1: '', 
                //     postal_code: '',
                //     country_code: '', 
                //   },
                // },
              },
            ],
            // application_context: {
            //   shipping_preference: "SET_PROVIDED_ADDRESS", // This will collect the shipping address from the buyer
            // },
          });
        },
        onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            const email = order.payer.email_address; 
            const shippingAddress = order.purchase_units[0].shipping.address; 
            console.log(order);
            console.log("Email:", email);
            console.log("Shipping Address:", shippingAddress);
            dispatch(clearCart());
            setIsSuccess(true);
          },
        onError: (err) => {
          console.log(err);
          setIsError(true);
        },
        style: {
            color: 'blue',      
            shape: 'rect',      
            label: 'pay',      
        }
      })
      .render(paypal.current);
    }
  }, [total]);
  // const productInfo = useProductInfo(id, selectedVariant);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleClose = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <div className="payment-page">
      {total > 0 ? (
        <div className="paypal-section">
          <div className="order-infos">
            <h1>Your Order</h1>
            <h2>Items:</h2>
            <ul className="payment-item">
              {carts &&
                carts.map((item, key) => (
                  <CartItem
                    key={key}
                    id={item.productId}
                    quantity={item.quantity}
                    selectedVariant={item.selectedVariant}
                  />
                  // <li key={index}>Product ID: {item.productId} - Quantity: {item.quantity}</li>
                ))}
            </ul>
            <p className="total" >Total: {total} €</p>
          </div>
          <div className="pay-infos">
            <h1>Pay with</h1>
            <div className="pay"ref={paypal}></div>
          </div>
        </div>
      ) : (
        <div>
          Your cart is empty.{" "}
          <Link
            style={{ textDecoration: "2px  white underlined" }}
            to="/products"
          >
            Let's fix it!
          </Link>
        </div>
      )}

      {isSuccess  && (
        <div className="popup-alert success">Your order was successfully made! Check your email for more info {isSuccess}
        <button onClick={handleClose}>OK</button></div>
      )}
    {isError && (
        <div className="popup-alert error">There was an error in your payment operation. Try again {isError}
        <button onClick={handleClose}>OK</button></div>
      )}
    </div>
  );
};

export default Payment;
