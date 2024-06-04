import ShopListItem from "../ShopListItem/ShopListItem";
import style from "./ShopList.module.css";
import { BsArrowRight } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

import { ProductContext, useContext } from "../../context/products-context";

export default function ShopList({
  products,
  productsCountInBasket,
  setProductsInBasket,
}) {
  const { handleShowShopList } = useContext(ProductContext);

  const shopListItems = products.map((product) => (
    <ShopListItem key={product.id} product={product} />
  ));

  const totalPrice = products
    .reduce((acc, x) => acc + x.price * x.count, 0)
    .toFixed(2);

  function handleRemoveAllProduct() {
    setProductsInBasket([]);
  }

  return (
    <article className={style.shopList}>
      <div className={style.header}>
        <h1 className={style.shoppingBag}>
          SHOPPING BAG ({productsCountInBasket})
        </h1>
        <BsArrowRight
          className={style.iconArrow}
          onClick={() => handleShowShopList()}
        />
      </div>

      <div className={style.shopListItemsArea}>{shopListItems}</div>

      <div className={style.footer}>
        <div className={style.footerText}>
          <h1>Total : $ {totalPrice}</h1>
          <FaTrashAlt
            className={style.iconTrash}
            onClick={handleRemoveAllProduct}
          />
        </div>

        <div className={style.buttons}>
          <button>View Cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </article>
  );
}
