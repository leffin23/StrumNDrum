import { useDispatch, useSelector } from "react-redux"
import "./cart.css"
import CartItem from "./CartItem"
import { toggleStatusCart } from "../../stores/cart"

const Cart = () => {
    
    const statusCart = useSelector(store => store.cart.statusCart)
    const carts = useSelector(store => store.cart.items)
    const dispatch =  useDispatch();

    const openCart = () =>{
        dispatch(toggleStatusCart());
      }
    

  return (
    <div className= {`cart ${statusCart === false ? "hide-cart" : "" }`}>
      <h1>Shopping cart</h1>
        <div className="items">
        {carts.map((item, key)=> (
            <CartItem key={key} id={item.productId} quantity={item.quantity} selectedVariant={item.selectedVariant}/>
        ))}
     </div>
      <div className="cart-buttons">

        <button onClick={openCart}>Cancel</button>
        <button>Buy</button>
      </div>
    </div>
  )
}

export default Cart
