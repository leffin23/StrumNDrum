import { useEffect, useState } from "react"
import { products } from "../../utils/products"
import { useDispatch } from "react-redux"
import { changeQuantity } from "../../stores/cart"


const CartItem = (props) => {

    const {id, quantity, selectedVariant} = props
    const [productInfo, setProductInfo] = useState([])
    const img = productInfo?.selectedVariant?.img;

    const dispatch = useDispatch();

    const handleMinusQuantity = () => {
        dispatch(
            changeQuantity({
                productId: id,
                quantity: quantity - 1,
                selectedVariant,
            })
        )

    }
    const handlePlusQuantity = () => {
        dispatch(
            changeQuantity({
                productId: id,
                quantity: quantity + 1,
                selectedVariant,
            })
        )

    }
    useEffect(() => {
        console.log(img)
        const findProduct = products.filter(product => id === product.id)[0];
        console.log(findProduct);
        setProductInfo(findProduct);
        console.log("HM");
        console.log(selectedVariant);

    }, [id, selectedVariant, img])
    
  return (
    <div className="cart-item">
      <h2>{productInfo.name} </h2>
      <div className="info-item">
      <img
        className="cart-img"
        src={selectedVariant.img ? selectedVariant.img[0] : 'defaultImage.jpg'} 
        alt={productInfo.name}
                />
       <p>{productInfo.price * quantity} €</p>
       <div className="quantity">
              <button onClick={handleMinusQuantity} className="quant"> - </button>
              <span> {quantity} </span>
              <button  onClick={handlePlusQuantity} className="quant"> + </button>
            </div>
            </div>
    </div>
  )
}

export default CartItem
