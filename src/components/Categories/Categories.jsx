import style from "./Categories.module.css";
import { ProductContext, useContext } from "../../context/products-context";

export default function Categories({ productsCopy }) {
  const { categories, setProducts } = useContext(ProductContext);

  const listItems = categories.map((category, i) => (
    <li key={i} onClick={() => handleCategoryClick(category)}>
      {category}
    </li>
  ));

  function handleCategoryClick(category) {
    const copyProducts = [...productsCopy];
    if (category != "all") {
      const filteredCtaegory = copyProducts.filter(
        (product) => product.category == category
      );
      setProducts(filteredCtaegory);
    } else setProducts(copyProducts);
  }
  return (
    <section className={style.categories}>
      <h1>Categories</h1>
      <ul className={style.list}>{listItems}</ul>
    </section>
  );
}
