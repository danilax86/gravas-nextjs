import { useState, useEffect } from "react";

export default ({ product, type, handleAddProduct }) => {
  const [persons, setPersons] = useState(1);
  const [price, setPrice] = useState();

  useEffect(() => {
    handlePriceChange();
  }, [persons]);

  const handlePersonsInput = e => {
    const desiredPersonsCount = Number(e.target.value);
    if (desiredPersonsCount >= 1) {
      if (
        (product.price_type.name === "absolute" &&
          product.prices.some(
            price => price.persons === desiredPersonsCount
          )) ||
        product.price_type.name === "per_person"
      ) {
        setPersons(desiredPersonsCount);
      }
    }
  };

  const handlePriceChange = () => {
    switch (product.price_type.name) {
      case "absolute":
        setPrice(
          product.prices.find(price => price.persons === persons).amount
        );
        break;
      case "per_person":
        setPrice(product.prices[0].amount * persons);
        break;
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleAddProduct(product, {
          persons,
          price
        });
      }}
    >
      <div>
        <label>Persons</label>
        <input
          type="number"
          name="persons"
          value={persons}
          min={1}
          onChange={handlePersonsInput}
        />
        <div>
          <div>Price</div>
          <div>€ {price}</div>
        </div>
      </div>
      <button>Add</button>
    </form>
  );
};
