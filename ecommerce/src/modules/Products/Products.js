import React, { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import Category from "../../components/Category/Category";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fecthProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fecthProducts();
  }, []);
  return (
    <div>
      <Category />
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default Products;
