import { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Step from "../step";
import STEPS from "../../../constants/steps";
import { i18n } from "../../../i18n";

class CheckoutStep extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  handlePurchaseSuccess({ reference }) {
    const { setActiveStep, setReference } = this.props;
    setActiveStep(STEPS.find(step => step.key === "receipt"));
    setReference(reference);
  }

  handlePurchaseError({ error }) {
    console.log(error);
    this.props.setSnackbarText(error);
  }

  async submit(e) {
    const { shoppingCartItems, contacts, theme, note } = this.props;

    const { error, token } = await this.props.stripe.createToken({
      name: "Name"
    });
    if (!error) {
      const body = {
        items: shoppingCartItems.map(({ id, persons, value, price }) => {
          return {
            id,
            persons,
            price,
            value
          };
        }),
        contacts,
        theme,
        note,
        total: shoppingCartItems.reduce((carry, item) => carry + item.price, 0),
        token: token.id,
        locale: i18n.language
      };

      let response = await fetch("/charge", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      response.ok && data.error === undefined
        ? this.handlePurchaseSuccess(data)
        : this.handlePurchaseError(data);
    } else {
      console.log(error);
    }
  }

  render() {
    const { title } = this.props;
    return (
      <Step title={title}>
        4242 4242 4242 4242
        <CardElement />
        <button onClick={this.submit}>Pay</button>
      </Step>
    );
  }
}

export default injectStripe(CheckoutStep);
