import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartContext";

function App() {
  const [showCart, SetShowCart] = useState(false);
  const ShowCartHandler = () => {
    SetShowCart(true);
  };
  const onCloseHandler = () => {
    SetShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={onCloseHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
