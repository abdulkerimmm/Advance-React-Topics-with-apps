import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import classes from "./app.module.css";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [everything, setOkEverything] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = (isSucces) => {
    setCartIsShown(false);
  };

  const HandlerOrderReady = () => {
    console.log("okkkkkkkkkk!!!!");
    setCartIsShown(false);
    setOkEverything(true);
  };

  const closeMessageBox = () => {
    setOkEverything(false);
  };
  return (
    <CartProvider>
      <Header shownCart={shownCartHandler} />
      {cartIsShown && (
        <Cart
          HandlerOrderReady={HandlerOrderReady}
          closeCart={hideCartHandler}
        />
      )}
      {everything && (
        <div className={classes.messageBox}>
          <p className={classes.message}>
            Orders were successfully placed. Have a good day!
          </p>
          <span className={classes.closeButton} onClick={closeMessageBox}>
            &times;
          </span>
        </div>
      )}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
