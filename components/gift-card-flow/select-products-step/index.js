import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import Chip from "@material-ui/core/Chip";
import { Grid, Tile } from "../design-step/DesignStep";
import styled from "@emotion/styled";
import CircularProgress from "@material-ui/core/CircularProgress";

import Step from "../step";
import SelectProduct from "./views/SelectProduct";
import AddPoduct from "./views/AddProduct";
import AddValue from "./views/AddValue";

import GET_PRODUCT_TYPES from "./queries/getProductTypes";

import { withTranslation } from "../../../i18n";

const SELECT_PRODUCT_TYPE = "select_product_type";
const SELECT_PRODUCT = "select_product";
const ADD_PRODUCT = "add_product";
const ADD_VALUE = "add_value";

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .MuiChip-root {
    margin: 0.25rem 0.25rem;
  }
`;

const SelectProductsStep = ({ t, title, addProduct, handle }) => {
  const [selectedType, setSelectedType] = useState();
  const [product, setProduct] = useState(null);

  const setStepDefaults = () => {
    setSelectedType();
    setProduct(null);
    setView(SELECT_PRODUCT_TYPE);
  };

  const handleAddProduct = (product, data) => {
    setStepDefaults();
    addProduct(product, data);
  };

  const [view, setView] = useState(SELECT_PRODUCT_TYPE);

  const { loading, error, data } = useQuery(GET_PRODUCT_TYPES, {
    variables: [],
    notifyOnNetworkStatusChange: true
  });

  return (
    <Step title={title}>
      <ChipContainer>
        {selectedType && (
          <Chip
            clickable
            onDelete={() => {
              setSelectedType(null);
              setProduct(null);
              setView(SELECT_PRODUCT_TYPE);
            }}
            label={t(selectedType.name)}
          />
        )}
        {product && (
          <Chip
            clickable
            onDelete={() => {
              setProduct(null);
              setView(SELECT_PRODUCT);
            }}
            label={t(product.name)}
          />
        )}
      </ChipContainer>

      {/* Types */}
      {view === SELECT_PRODUCT_TYPE && (
        <Grid>
          {!loading ? (
            data.types.map(type => (
              <Tile
                imagePath={`/static/gift-card/product-types/${type.name}.jpg`}
                name={t(type.name)}
                key={type.id}
                value={type}
                handleSelect={type => {
                  setSelectedType(type);
                  type.name === "value"
                    ? setView(ADD_VALUE)
                    : setView(SELECT_PRODUCT);
                }}
              >
                {type.name}
              </Tile>
            ))
          ) : (
            <CircularProgress />
          )}
        </Grid>
      )}

      {/* Products */}
      {view === SELECT_PRODUCT && (
        <div>
          <SelectProduct
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

export default withTranslation("gift_cards")(SelectProductsStep);
