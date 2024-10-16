/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../stores/cart";
import { products } from "../utils/products";
import CartItem from "../components/cart/CartItem";
import { useEffect, useRef, useState } from "react";
import OrderPDF from "../components/OrderPDF";
import { blobToBase64, generatePDF, sendEmail } from "../stores/sendEmail";
import Paypal from "../components/Paypal";
import { useNavigate } from "react-router-dom";


const Payment = () => {
  const carts = useSelector((store) => store.cart.items);
//   const paypal = useRef();
  const dispatch =  useDispatch();
  const[isSuccess, setIsSuccess] = useState(false)
  const[isError, setIsError] = useState(false)
  const [userEmail, setUserEmail] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({});
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const[isSent, setIsSent] = useState(false);
  const modal = useRef();
  const router = useNavigate();


  const handleApprove = (order) => {
    const email = order.payer.email_address;
    const shippingAddress = order.purchase_units[0].shipping.address;
    setUserEmail(email);
    setShippingAddress(shippingAddress);
    setIsSuccess(true);
    savePDF(email, shippingAddress);

    
  };

  const handleError = (err) => {
    console.error(err);
    setIsError(true);
  };

  const total = carts.reduce((acc, item) => {
    const product = products.find((product) => item.productId === product.id);
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

    const handleCloseSuccess = () => {
        dispatch(clearCart()); 
        setIsSuccess(false);
        router("/products")
    }
  const handleClose = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  useEffect(() => {
    if (isSuccess && pdfDownloaded) {
      dispatch(clearCart()); 
    }
  }, [isSuccess, pdfDownloaded, dispatch]);

//   const handleSendEmail = async () => {
//     const emailContent = 'Thank you for your order at Strum&Drum! We hope\
//         you will enjoy your new music instruments. Here are your order details!';
//     const doc = <OrderPDF email={userEmail} shippingAddress={shippingAddress} items={carts} total={total} />;
//     const attachmentBlob = await generatePDF(doc); 
//     const base64PDF = await blobToBase64(attachmentBlob);
//     const attachment = base64PDF.split(',')[1]; 
//     await sendEmail(userEmail, 'Your Strum&Drum order.', emailContent, attachment);
//     setIsSent(true);
   
//   };
  const savePDF = async (email, shippingAddressP) => {
    const doc = <OrderPDF email={email} shippingAddress={shippingAddressP} items={carts} total={total} />;
    const blob = await generatePDF(doc);
    const pdfURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = `Order_Strum&Drum_${Date.now()}.pdf`; 
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link)
  }

  const openPDFInNewWindow = async (email, shippingAddressP) => {
    const doc = <OrderPDF email={email} shippingAddress={shippingAddressP} items={carts} total={total} />;
    const blob = await generatePDF(doc);
    const pdfURL = URL.createObjectURL(blob);
    setPdfDownloaded(true);
    // const newWindow = window.open(pdfURL, '_blank');
    // if (newWindow) {
    //     newWindow.location.href = pdfURL; 
    //     newWindow.focus();
    //     setPdfDownloaded(true);
    // }
  };
  const closeModal = (e) => {
    if(e.target === modal.current){
        handleClose();
    }
  }
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
            <Paypal               total={total}
              onSuccess={handleApprove}
              onError={handleError}/>
            {/* <div className="pay"ref={paypal}></div> */}
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
   {/* <button onClick={openPDFInNewWindow}>Open</button> */}
     {/* <button onClick={handleSendEmail}>Send</button> */}


      {isSuccess  && (
        
        <div className="modal-window">
        <div className="popup-alert success">
            <div>Your order was successfully made! Check saved pdf to see more details. </div>
            <div>👉<a onClick={openPDFInNewWindow}>Or press here to download.</a></div>
        <button onClick={handleCloseSuccess}>OK</button>
        </div>
   
        {/* <PDFViewer style={{ width: '100%', height: '500px' }}>
                <OrderPDF email={userEmail} shippingAddress={shippingAddress} items={carts}  total={total} />
                </PDFViewer> */}
        {/* <PDFDownloadLink
            document={<OrderPDF email={userEmail} shippingAddress={shippingAddress} items={carts} total={total} />}
            fileName="order-details.pdf"
            onClick={() => setPdfDownloaded(true)}
        >Link to download</PDFDownloadLink>      <button onClick={handleClose}>OK</button> */}
        </div>
     )} 
    {isError && (
         <div className="modal-window" ref={modal} onClick={closeModal}>
        <div className="popup-alert error">There was an error in your payment operation. Try again {isError}
        <button onClick={handleClose}>OK</button></div>
        </div>
      )}
    </div>
  );
};

export default Payment;
