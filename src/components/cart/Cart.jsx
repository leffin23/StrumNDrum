import { useDispatch, useSelector } from "react-redux"
import "./cart.css"
import CartItem from "./CartItem"
import { toggleStatusCart } from "../../stores/cart"
import { useEffect, useState } from "react"
import { products } from "../../utils/products"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    
    const statusCart = useSelector(store => store.cart.statusCart);
    const carts = useSelector(store => store.cart.items);
    const [total, setTotal] = useState(0);
    const dispatch =  useDispatch();
    const navigate = useNavigate();


    const openCart = () =>{
        dispatch(toggleStatusCart());
      }
  
      useEffect(() => {
        const calculateTotal = () => {
          let tot = 0;
          carts.forEach(item => {
            const findProduct = products.filter(product => item.productId === product.id)[0];
            if (findProduct) {
              tot += Number(findProduct.price) * item.quantity; 
            }
          });
          return tot;
        };
        setTotal(calculateTotal());
      }, [carts]);

      const handleOpenPayment = () => {
        navigate('/payment', { state: { total, carts } }); 
        openCart();
      }

  return (
    <div className= {`cart ${statusCart === false ? "hide-cart" : "" }`}>
      <h1>Shopping cart</h1>
        <div className="items">
        {carts.map((item, key)=> (
            <CartItem key={key} id={item.productId} quantity={item.quantity} selectedVariant={item.selectedVariant}/>
        ))}
        <div className="items-total">Total: {total} €</div>
     </div>

      <div className="cart-buttons">

        <button onClick={openCart}>Cancel</button>
       <button onClick={handleOpenPayment}>Buy</button>
      </div>
    </div>
  )
}

export default Cart
