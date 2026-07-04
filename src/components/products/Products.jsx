import { useState, useEffect } from "react";
import "./Products.css";
import {
  getProducts,
  getCategories,
  getProductsBasedOnCategory,
} from "./productService.js";

import Pro from "./Pro.jsx";
import Categories from "./Categories.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCategories(setCategories);
    getProducts(setProducts);
  }, []);

  return (
    <div>
   
     <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-box"
/>

{/* CATEGORIES */}
      <div id="Catogeries">
        {categories.map((category) => (
          <Categories
            key={category.id || category.categoryName}
            id={category.id}
            url={category.url}
            title={category.categoryName}
            setProducts={setProducts}
            getProductsBasedOnCategory={getProductsBasedOnCategory}
          />
        ))}
      </div>

      {/* PRODUCTS */}
      <div id="products-container">
       {products
  .filter((p) =>
    p.productName.toLowerCase().includes(search.toLowerCase())
  )
  .map((product) => (
    <Pro
      key={product.id}
      id={product.id}
      image={product.image}
      productName={product.productName}
      paragraph={product.paragraph}
    />
        ))}
      </div>

    </div>
  );
}

export default Products;