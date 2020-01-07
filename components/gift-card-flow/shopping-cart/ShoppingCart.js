import { withTranslation } from "../../../i18n";

const ShoppingCart = ({ t, theme, items, note, removeProduct }) => {
  return (
    <aside>
      <h1>{t("shopping_cart_heading")}</h1>
      {theme && <div>{theme}</div>}
      {items.length > 0 &&
        items.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            {!!item.persons && <div>{item.persons} persons</div>}
            <div>€ {item.price}</div>
            <button onClick={() => removeProduct(item)}>X</button>
          </div>
        ))}
      <div>
        {!!note && (
          <div>
            <div>Note</div>
            <p>{note}</p>
          </div>
        )}
        {items.length > 0 && (
          <span>
            Total:
            <strong>
              € {items.reduce((carry, item) => carry + item.price, 0)}
            </strong>
          </span>
        )}
      </div>
    </aside>
  );
};

export default withTranslation("gift_cards")(ShoppingCart);
