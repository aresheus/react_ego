import style from "./Product.module.css";
import { MdOutlineStar } from "react-icons/md";

import { ProductContext, useContext } from "../../context/products-context";

export default function Product({ product }) {
  const {
    id,
    title,
    price,
    category,
    image,
    rating: { rate, count },
  } = product;

  const { handleProductInBasket } = useContext(ProductContext);

  return (
    <article className={style.product}>
      <div className={style.rating}>
        <h1>Rating</h1>
        <p>
          {rate} <MdOutlineStar className={style.star} />
        </p>
      </div>

      <img src={image} alt="" className={style.productImg} />

      <div className={style.productInfos}>
        <p className={style.category}>{category}</p>
        <h2 className={style.title}>{title}</h2>
        <h1 className={style.price}>$ {price}</h1>
      </div>

      <div className={style.footer}>
        <button
          className={style.add_btn}
          onClick={() => handleProductInBasket(product)}
        >
          ADD TO CART
        </button>
        <p className={style.stock}>Stock : {count}</p>
      </div>
    </article>
  );
}
