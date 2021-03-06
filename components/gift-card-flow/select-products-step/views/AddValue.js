import { useState } from "react";
import { withTranslation } from "../../../../i18n";
import { useQuery } from "@apollo/react-hooks";
import GET_PRODUCT_BY_NAME from "../queries/getProductByName";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Add, Remove } from "@material-ui/icons";
import { InputCard, AddProductControls } from "./AddProduct";
import Button from "../../../button/button";

const AddValue = ({ handleAddProduct, t }) => {
  const [value, setValue] = useState(5);

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_NAME, {
    variables: {
      name: "value"
    }
  });

  const modifyValueBy = modifier => {
    if (Number.isNaN(value)) {
      modifier > 0 ? setValue(modifier) : setValue(0);
    } else {
      setValue(value + modifier > 0 ? value + modifier : 0);
    }
  };

  return (
    !loading && (
      <div>
        <InputCard>
          <img className="image" src={`/static/gift-card/products/value.jpg`} />
          <h3>{t("enter_value")}</h3>
          <IconButton size="small" onClick={() => handleChangeValue(-5)}>
            <Remove />
          </IconButton>
          <TextField
            variant="outlined"
            label={t("value")}
            name="value"
            type="number"
            value={value}
            min={1}
            onChange={e => setValue(Number(e.target.value))}
          />
          <IconButton size="small" onClick={() => modifyValueBy(5)}>
            <Add />
          </IconButton>
        </InputCard>
        <AddProductControls>
          <span>€ {value}</span>
          <Button
            onClick={() => {
              handleAddProduct(data.products[0], {
                price: value
              });
            }}
          >
            {t("add")}
          </Button>
        </AddProductControls>
      </div>
    )
  );
};

export default withTranslation("gift_card")(AddValue);
