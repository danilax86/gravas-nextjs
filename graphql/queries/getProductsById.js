const gql = require("graphql-tag");

module.exports = gql`
  query($productIds: [Int!]!) {
    products(where: { id: { _in: $productIds } }) {
      id
      name
      prices {
        amount
        persons
      }
      price_type {
        name
      }
      type {
        name
      }
    }
  }
`;
