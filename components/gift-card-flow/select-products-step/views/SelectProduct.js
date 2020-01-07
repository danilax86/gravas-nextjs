import React from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_PRODUCTS_BY_TYPE from "../queries/getProductsByType";

const SelectService = ({ type, handleSelectProduct }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_TYPE, {
    variables: {
      id: type.id
    }
  });

  return (
    <div>
      {!loading &&
        data.products.map(product => (
          <div onClick={() => handleSelectProduct(product)} key={product.id}>
            {product.name}
          </div>
        ))}
    </div>
  );
};

export default SelectService;
