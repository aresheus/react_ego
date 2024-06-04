import axios from "axios";
async function fetchProducts() {
  const BASE_URL = "https://fakestoreapi.com/products";

  const response = await axios.get(BASE_URL);

  return response.data;
}

async function fetchCategories() {
  const BASE_URL = "https://fakestoreapi.com/products/categories";

  const response = await axios.get(BASE_URL);

  return response.data;
}

export { fetchProducts, fetchCategories };
