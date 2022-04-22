import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "../Layout/Header.module.css";

import MealsImg from "../../Assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactiveMeals</h1>
        <HeaderCartButton onClickShow={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="Table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
