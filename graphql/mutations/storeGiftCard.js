const gql = require("graphql-tag");

module.exports = gql`
  mutation insert_gift_card(
    $design: String!
    $email: String!
    $name: String
    $note: String!
    $phone: String
    $valid_until: timestamptz!
    $stripe_ref: String!
    $items: gift_card_items_arr_rel_insert_input!
  ) {
    insert_gift_cards(
      objects: [
        {
          design: $design
          email: $email
          name: $name
          note: $note
          phone: $phone
          valid_until: $valid_until
          stripe_ref: $stripe_ref
          items: $items
        }
      ]
    ) {
      returning {
        id
        reference
        created_at
        valid_until
        email
      }
    }
  }
`;
