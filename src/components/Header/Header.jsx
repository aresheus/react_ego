import style from "./Header.module.css";

import { BsFillBagFill } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { ProductContext, useContext } from "../../context/products-context";
import { useState } from "react";

export default function Header({ productCount }) {
  const { handleShowShopList } = useContext(ProductContext);

  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(true);
  }

  function handleClose() {
    setShowMenu(false);
  }

  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />

      <nav className={`${style.navMenu} ${showMenu ? style.show : ""}`}>
        <a href="#home" onClick={handleClose}>
          Home
        </a>
        <a href="#products" onClick={handleClose}>
          Products
        </a>
        <a href="#about" onClick={handleClose}>
          About
        </a>
        <a href="#contact" onClick={handleClose}>
          Contact
        </a>
        <IoCloseOutline className={style.navClose} onClick={handleClose} />
      </nav>

      <div className={style.iconArea}>
        <div className={style.logoArea} onClick={handleShowShopList}>
          <p className={style.basketCount}>{productCount}</p>
          <BsFillBagFill className={style.basket} />
        </div>

        <RiMenu3Fill className={style.menu} onClick={handleMenu} />
      </div>
    </header>
  );
}
