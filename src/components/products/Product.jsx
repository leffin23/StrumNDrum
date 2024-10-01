import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../utils/products";
import AddToCart from "../cart/AddCart";
import ImgCarousel from "./ImgCarousel";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Product = () => {
  const params = useParams();
  const [productInfo, setProductInfo] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [resetCarousel, setResetCarousel] = useState(0); 

  const handleMinusQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  
 

  useEffect(() => {
    const productId = parseInt(params.productId, 10);
    console.log(productId);
    const findProduct = products.filter((product) => product.id === productId);
    if (findProduct.length > 0) {
      setProductInfo(findProduct[0]);
      console.log(findProduct[0]);
      setSelectedVariant(findProduct[0].variants ? findProduct[0].variants[0] : 0);
      
      console.log("Variant");
      console.log(findProduct.variants);
    } else {
      window.location.href = "/error";
    }
  }, [params.productId]);

  useGSAP(() => {
    const stgElements = document.querySelectorAll(".stg");
    if (stgElements.length > 0) {
    gsap.fromTo('.stg', 
      { 
        opacity: 0,
        y: 10,
   
      }, 
      {
        opacity: 1, 
        duration: .8,
        stagger: 0.2,
        y: 0,
        ease: "power1.inOut",
      })}
  }, [selectedVariant, productInfo])

  useEffect(() => {
    if (selectedVariant && productInfo.variants) {
      setResetCarousel((prev) => prev + 1); 
    }
  }, [selectedVariant, productInfo]);

  if (!productInfo || !selectedVariant) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="product-page">
      <h1 className="stg">{productInfo.name}</h1>
      <div className="description stg">
        <div className="productImg">
        <ImgCarousel resetIndex={resetCarousel} img={selectedVariant.img} />
        </div>
        {/* <img src={productInfo.img} alt={productInfo.name}></img> */}
        <div className="descr-text ">
          <div className="buy">
            <div className="quantity">
              <button className="qnt" onClick={handleMinusQuantity}> - </button>
              <span className="price"> {quantity} </span>
              <button className="qnt" onClick={handlePlusQuantity}> + </button>
            </div>
         
            <div className="color-selection">
                {productInfo.variants && productInfo.variants.map((variant, index) => (
                    <button key={index} onClick={() => setSelectedVariant(variant)} className={`color-btn ${selectedVariant === variant ? "active-btn": " "}`}
                    style={{backgroundColor: `${variant.color}`, 
                    padding: 0,
                    borderRadius:"100%"}}>
                       
                    </button>
                ))}
            </div>

            <div className="buy-btn">
            <div><p className="price">{productInfo.price} €</p></div>
              <AddToCart id={productInfo.id} quantity={quantity} selectedVariant={selectedVariant}/>
            </div>
          </div>
          
          <p>{productInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
