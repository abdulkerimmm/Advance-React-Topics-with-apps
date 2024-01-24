import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header shownCart={shownCartHandler} />
      {cartIsShown && <Cart closeCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
