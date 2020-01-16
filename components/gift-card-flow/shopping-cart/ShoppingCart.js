import { withTranslation } from "../../../i18n";
import styled from "@emotion/styled";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const ShoppingCartContainer = styled.aside`
  background-color: ${p => p.theme.colors.superLightGrey};
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: ${p => p.theme.fontWeight.light};
  margin-bottom: 1.5rem;
`;

const Note = styled.p`
  font-size: ${p => p.theme.fonts.button};
  color: ${p => p.theme.colors.darkGrey};
  width: 100%;
  word-break: break-word;
  hyphens: auto;
  margin-left: 1.75rem;
`;

const SectionTitleContainer = styled.h2`
  font-size: ${p => p.theme.fonts.button};
  color: ${p => p.theme.colors.darkGrey};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  .MuiSvgIcon-root {
    margin-right: 1rem;
    color: ${p => p.theme.colors.primary};
    font-size: 0.75rem;
  }
`;

const SectionTitle = ({ label }) => {
  return (
    <SectionTitleContainer>
      <CheckIcon fontSize="small" />
      <p>{label}</p>
    </SectionTitleContainer>
  );
};

const ShoppingCartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .details {
    display: flex;
    flex-direction: column;
    margin-left: 1.75rem;

    .name {
      font-size: ${p => p.theme.fonts.body};
      color: ${p => p.theme.colors.darkGrey};
      margin-bottom: 0.125rem;
    }

    .unit {
      font-size: ${p => p.theme.fonts.button};
      color: ${p => p.theme.colors.primaryCool};
    }
  }

  .price {
    margin-left: auto;
    margin-right: 2rem;
    font-size: ${p => p.theme.fonts.headline5};
    color: ${p => p.theme.colors.primary};
  }
`;

const ShoppingCartItem = ({ key, item, removeProduct, unit }) => {
  return (
    <ShoppingCartItemContainer key={key}>
      <div className="details">
        <div className="name">{item.name}</div>
        {!!unit && (
          <div className="unit">
            {item.persons} {unit}
          </div>
        )}
      </div>
      <div className="price">€ {item.price}</div>
      <IconButton onClick={() => removeProduct(item)} size="small">
        <DeleteOutlineIcon style={{ color: "red" }} />
      </IconButton>
    </ShoppingCartItemContainer>
  );
};

const ShoppingCartSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  .value {
    margin-left: 1.75rem;
  }
`;

const ShoppingCart = ({ t, theme, items, note, removeProduct }) => {
  return (
    <ShoppingCartContainer>
      <Title>{t("shopping_cart_heading")}</Title>
      {theme && (
        <ShoppingCartSection>
          <SectionTitle label={t("design")} />
          <div className="value">{theme}</div>
        </ShoppingCartSection>
      )}
      {!!items.length && (
        <ShoppingCartSection>
          <SectionTitle label={t("services")} />
          {items.map(item => (
            <ShoppingCartItem
              item={item}
              key={item.id}
              unit={!!item.persons && t("persons")}
              removeProduct={removeProduct}
            />
          ))}
        </ShoppingCartSection>
      )}
      {!!note && (
        <ShoppingCartSection>
          <SectionTitle label={t("note")} />
          <Note>{note}</Note>
        </ShoppingCartSection>
      )}
    </ShoppingCartContainer>
  );
};

export default withTranslation("gift_cards")(ShoppingCart);
