import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const CategoryProduct = () => {
  const { type } = useParams();
  console.log(type, "type");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${type}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fecthProducts();
  }, []);
  if (!Object.keys(products).length > 0) return <div>Loading</div>;
  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};

export default CategoryProduct;
