/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 

const AddToCart = (props) => {

    const {id, quantity, selectedVariant} = props

    const carts = useSelector(store => store.cart.items)
    console.log(carts)
    const dispatch = useDispatch();
    
    const handleAddToCart = (event) => {
      event.stopPropagation();
      dispatch(addToCart({
        productId: id,
        quantity: quantity,
        selectedVariant,
      }))

    }

  return (
    <button className="add" onClick={handleAddToCart}>Add
        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
    </button>
  )
}

export default AddToCart
