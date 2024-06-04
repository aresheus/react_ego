import style from "./ShopListItem.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { ProductContext, useContext } from "../../context/products-context";

export default function ShopListItem({ product }) {
  const { id, title, price, image, count } = product;

  const { handleAllProduct, handleAllProductFunc } = useContext(ProductContext);

  const totalPrice = (count * price).toFixed(2);

  function handleDecrement() {
    if (count > 1) {
      const newArr = handleAllProduct.map((x) => {
        if (x.id == id) x.count--;
        return x;
      });

      handleAllProductFunc(newArr);
    }
  }

  function handleIncrement() {
    const newArr = handleAllProduct.map((x) => {
      if (x.id == id) x.count++;
      return x;
    });

    handleAllProductFunc(newArr);
  }

  function handleRemoveProduct() {
    const newArr = handleAllProduct.filter((x) => x.id != id);
    handleAllProductFunc(newArr);
  }

  return (
    <article className={style.shopListItem}>
      <div className={style.cardPart1}>
        <img src={image} alt="" className={style.img} />
        <div className={style.cardPart11}>
          <h1>{title}</h1>

          <div className={style.cardPart111}>
            <div className={style.countGen}>
              <button onClick={handleDecrement}>-</button>
              <p>{count}</p>
              <button onClick={handleIncrement}>+</button>
            </div>

            <p className={style.price}>$ {price}</p>
          </div>
        </div>
      </div>
      <div className={style.cardPart2}>
        <IoCloseOutline
          className={style.removeIcon}
          onClick={handleRemoveProduct}
        />

        <p className={style.totalPrice}>$ {totalPrice}</p>
      </div>
    </article>
  );
}
