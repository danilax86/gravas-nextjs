import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import Step from "../step";
import SelectService from "./views/SelectProduct";
import AddPoduct from "./views/AddProduct";
import AddValue from "./views/AddValue";

import GET_PRODUCT_TYPES from "./queries/getServiceTypes";

import { withTranslation } from "../../../i18n";

const SELECT_PRODUCT = "select_product";
const ADD_PRODUCT = "add_product";
const ADD_VALUE = "add_value";

const SelectServicesStep = ({ t, title, addProduct, handle }) => {
  const [selectedType, setSelectedType] = useState();
  const [product, setProduct] = useState();

  const setStepDefaults = () => {
    setSelectedType(null);
    setProduct(null);
    setView(SELECT_PRODUCT_TYPE);
  };

  const handleAddProduct = (product, data) => {
    setStepDefaults();
    addProduct(product, data);
  };

  const SELECT_PRODUCT_TYPE = "select_product_type";
  const [view, setView] = useState(SELECT_PRODUCT_TYPE);

  const { loading, error, data } = useQuery(GET_PRODUCT_TYPES, {
    variables: [],
    notifyOnNetworkStatusChange: true
  });

  console.log(error);

  return (
    <Step title={title}>
      <div>
        <h2>Current selection</h2>
        {selectedType && (
          <div>
            <span>{selectedType.name}</span>
            <span
              onClick={() => {
                setSelectedType(null);
                setProduct(null);
                setView(SELECT_PRODUCT_TYPE);
              }}
            >
              X
            </span>
          </div>
        )}
        {product && (
          <div>
            <span>{product.name}</span>
            <span
              onClick={() => {
                setProduct(null);
                setView(SELECT_PRODUCT);
              }}
            >
              X
            </span>
          </div>
        )}
      </div>

      {/* Types */}
      {view === SELECT_PRODUCT_TYPE && (
        <div>
          {!loading &&
            data.types.map(type => (
              <div
                key={type.id}
                onClick={() => {
                  setSelectedType(type);

                  type.name === "value"
                    ? setView(ADD_VALUE)
                    : setView(SELECT_PRODUCT);
                }}
              >
                {type.name}
              </div>
            ))}
        </div>
      )}

      {/* Products */}
      {view === SELECT_PRODUCT && (
        <div>
          <SelectService
            type={selectedType}
            handleSelectProduct={product => {
              setProduct(product);
              setView(ADD_PRODUCT);
            }}
          />
        </div>
      )}

      {/* Add product */}
      {view === ADD_PRODUCT && (
        <AddPoduct
          product={product}
          type={selectedType}
          handleAddProduct={handleAddProduct}
        />
      )}

      {/* Add value */}
      {view === ADD_VALUE && <AddValue handleAddProduct={handleAddProduct} />}
    </Step>
  );
};

export default withTranslation("gift_cards")(SelectServicesStep);
