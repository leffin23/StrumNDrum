import { useState, useEffect } from 'react';

const useFilter = (initialCategory, products) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(() =>
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory)
    );
  }, [selectedCategory, products]);

  return { selectedCategory, setSelectedCategory, filteredProducts };
};

export default useFilter;