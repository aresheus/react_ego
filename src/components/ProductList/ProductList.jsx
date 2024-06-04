import style from "./ProductList.module.css";
import Product from "../Product/Product";
import { ProductContext, useContext } from "../../context/products-context";
export default function ProductList() {
  const { products } = useContext(ProductContext);

  const productBoxes = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section className={style.productList} id="products">
      {productBoxes}
    </section>
  );
}
