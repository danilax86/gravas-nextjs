import gql from "graphql-tag";

const GET_SERVICES_BY_TYPE = gql`
  query Type($id: ID!) {
    type(id: $id) {
      id
      products {
        id
        name
        price_type {
          name
        }
        prices {
          persons
          amount
        }
      }
    }
  }
`;

export default GET_SERVICES_BY_TYPE;
