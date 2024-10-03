import { useEffect, useState } from 'react';
import { products } from '../utils/products'; // Adjust the import based on your project structure

const useProductInfo = (id, selectedVariant) => {
  const [productInfo, setProductInfo] = useState([]);
  const img = productInfo?.selectedVariant?.img;

  useEffect(() => {
    console.log(img);
    const findProduct = products.find((product) => id === product.id);
    console.log(findProduct);
    setProductInfo(findProduct);
    console.log("HM");
    console.log(selectedVariant);
  }, [id, selectedVariant, img]);

  return productInfo;
};

export default useProductInfo;