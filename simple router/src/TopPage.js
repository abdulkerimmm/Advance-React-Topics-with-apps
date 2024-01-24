import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TopPage = () => {
  setTimeout(() => {
    nevigate("/products");
  }, 5000);
  const nevigate = useNavigate();
  return (
    <main>
      <p>
        main page <Link to="/products">go to products page</Link>
      </p>
      mainPage
    </main>
  );
};

export default TopPage;
