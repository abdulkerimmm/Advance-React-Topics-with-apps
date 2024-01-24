import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const DummyProducts = [
    { id: "1", title: "Xiomi Phone " },
    { id: "2", title: "Earth MosePad " },
    { id: "3", title: "HP pavilion " },
    { id: "4", title: "Mouse " },
  ];
  return (
    <div>
      <h1>PRODUCTS</h1>
      <ul>
        {DummyProducts.map((item) => {
          return (
            <li>
              <Link to={item.id}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
