import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isActive = useSelector((state) => state.cart.isActive);
  return (
    <Layout>
      {isActive && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
