import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fecthCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fecthCategories();
  }, []);
  return (
    <div>
      <FeatureCard cards={categories} />
    </div>
  );
};

export default Category;
