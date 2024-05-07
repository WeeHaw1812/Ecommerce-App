import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Category from "../Category/Category";

const CategoryProduct = () => {
  const { type } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${type}`
      );
      const data = await response.json();
      setProducts(data);
    };
    fecthProducts();
  }, [type]);
  if (!Object.keys(products).length > 0) return <div>Loading</div>;
  return (
    <div>
      <Category />
      <ProductCard products={products} />
    </div>
  );
};

export default CategoryProduct;
