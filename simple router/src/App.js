import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import MainPage from "./TopPage";
import Products from "./Products";
import NavigateBar from "./componet/NavigateBar";
import TopPage from "./TopPage";
import UpComponent from "./componet/UpComponent";
import ErrorPage from "./componet/ErrorPage";
import ProductDetail from "./componet/ProductDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <UpComponent />,
    children: [
      { index: true, element: <TopPage /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return (
    <main>
      <h1>React Router Dom</h1>
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
