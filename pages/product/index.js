import React from "react";
const data = require("../../data/products.json")
const Products = () => {
  return (
    <>
      <div className="products">
        {data.map((e) => (
          <>
            <div className="product">
              <h1>{e.name}</h1>
              <h2>{e.price}</h2>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
export { data };