import React from "react";
import { ReactComponent as PizzaLogo } from "../../images/pizza-logo.svg";
import scss from "./Header.module.scss";
import { ReactComponent as CartLogo } from "../../images/cart.svg";

const Header = () => {
  return (
    <div className={scss.container}>
      <div className={scss.logoWrap}>
        <PizzaLogo width={40} height={40} />
        <div className={scss.logoText}>
          <h1>REACT PIZZA</h1>
          <p>The most delicious pizza in the universe</p>
        </div>
      </div>
      <div className={scss.cartWrap}>
        <span>100 $</span>
        <div></div>
        <span className={scss.cartIconWrap}>
          <CartLogo width={16} height={16} />
          <span>3</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
