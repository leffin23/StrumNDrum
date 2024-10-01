
import { products, categories } from '../utils/products'
import "../utils/products.css"
import ProductCart from '../components/products/ProductCart'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useFilter from '../hooks/useFilter'
import Filter from '../components/products/Filter'


const Products = () => {

  const { selectedCategory, setSelectedCategory, filteredProducts } = useFilter("All", products);

  useGSAP(() => {
    gsap.fromTo('.product', 
      {
        opacity: 0, 
     
      },
      {
        opacity: 1,
        duration: .4,
        stagger: 0.1,
     
      })
      const no_found = document.querySelectorAll("#no_found");
      if(no_found.length > 0 ){
      gsap.fromTo('#no_found', 
        {
          opacity: 0, 
          y: 10,
       
        },
        {
          opacity: 1,
          duration: .5,
          y: 0,
          ease: 'power1.inOut'
       
        })}
  }, [filteredProducts])


return (
  <div className="products-page">
    <Filter
      selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory} 
      categories={categories} 
    />
    
    <div className="products-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCart key={product.id} className="product" data={product} />
        ))
      ) : (
        <p id="no_found" style={{
          color: "var(--product-text",
          fontWeight: 'bold'
        }}>No products found for this category.</p>
      )}
    </div>
  </div>
);
};

export default Products;