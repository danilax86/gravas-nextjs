const gql = require("graphql-tag");

module.exports = gql`
  mutation handle_gift_card_payment_success($id: Int!, $stripe_ref: String!) {
    update_gift_cards(
      where: { id: { _eq: $id } }
      _set: { stripe_ref: $stripe_ref }
    ) {
      affected_rows
    }
  }
`;
