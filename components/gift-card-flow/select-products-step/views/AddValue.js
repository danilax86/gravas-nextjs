import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_PRODUCT_BY_NAME from "../queries/getProductByName";

const AddValue = ({ handleAddProduct }) => {
  const [value, setValue] = useState(1);

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_NAME, {
    variables: {
      name: "value"
    }
  });

  const handleChangeValue = e => {
    const newValue = Number(e.target.value);
    if (newValue >= 1) {
      setValue(newValue);
    }
  };

  return (
    !loading && (
      <div>
        <input
          name="value"
          value={value}
          type="number"
          onChange={handleChangeValue}
        />
        <div>€ {value}</div>
        <button
          onClick={() => {
            handleAddProduct(data.products[0], {
              price: value
            });
          }}
        >
          Add
        </button>
      </div>
    )
  );
};

export default AddValue;
