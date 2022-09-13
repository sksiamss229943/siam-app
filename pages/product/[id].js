import { useRouter } from "next/router";
import React from "react";
import { data } from "./index";

const ProductId = () => {
  const router = useRouter();
  const { id } = router.query;
  const prod_details = data.filter((e) => {
    return id == e.id;
  });
  return (
    <>
      {prod_details.map((e) => (
        <>
          <h1>{e.name}</h1>
          <h3>Price: {e.price}</h3>
        </>
      ))}
    </>
  );
};

export default ProductId;