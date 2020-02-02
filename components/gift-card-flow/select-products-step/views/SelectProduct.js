import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuery } from "@apollo/react-hooks";
import GET_PRODUCTS_BY_TYPE from "../queries/getProductsByType";
import { Grid, Tile } from "../../design-step/DesignStep";
import { withTranslation } from "../../../../i18n";

const SelectProduct = ({ t, type, handleSelectProduct }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_TYPE, {
    variables: {
      id: type.id
    }
  });

  return (
    <Grid>
      {!loading ? (
        data.type.products.map(product => (
          <Tile
            name={t(product.name)}
            value={product}
            imagePath={`/static/gift-card/products/${product.name}.jpg`}
            handleSelect={() => handleSelectProduct(product)}
            key={product.id}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default withTranslation("gift_cards")(SelectProduct);
