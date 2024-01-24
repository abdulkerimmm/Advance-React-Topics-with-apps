import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      {params.productId}
      <h1>-------------------------</h1>
      <button>
        <Link to=".." relative="route">
          Back to previuos page
        </Link>
      </button>
    </div>
  );
};

export default ProductDetail;
