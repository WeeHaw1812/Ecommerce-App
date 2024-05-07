import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import StatCard from "../../components/StatCard/StatCard";
import Category from "../../components/Category/Category";

const Home = () => {
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
      <Hero />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      <Category />
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading....</div>
      )}

      <StatCard />
    </div>
  );
};

export default Home;
