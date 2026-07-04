import axios from "axios";

export const getProducts = async (setProducts) => {
  const res = await axios.get("http://localhost:3000/products");
  setProducts(res.data);
};

export const getCategories = async (setCategories) => {
  const res = await axios.get("http://localhost:3000/Categories");
  setCategories(res.data);
};

export const getProductsBasedOnCategory = async (categoryName, setProducts) => {
  const res = await axios.get("http://localhost:3000/products");

  if (categoryName === "All") {
    setProducts(res.data);
  } else {
    const filtered = res.data.filter((product) => {
      return product.category.toLowerCase() === categoryName.toLowerCase();
    });

    setProducts(filtered);
  }
};