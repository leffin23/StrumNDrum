/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AddToCart from "../cart/AddCart";
import ImgCarousel from "./ImgCarousel";

const ProductCart = (props) => {
  const { id, name, variants, price } = props.data;

  return (
    <div className="product">
      <Link className="prod-important" key={id} to={`/products/${id}`}>
        <h2> {name} </h2>
        <div className="img-carousel">
        <ImgCarousel img={variants[0].img}/>
        </div>
       
      </Link>
      <div className="product-footer">
        <p className="price">{price} €</p>
        <AddToCart id={id} quantity={1} selectedVariant={variants[0]}/>
      </div>
    </div>
  );
};

export default ProductCart;
