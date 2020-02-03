import gql from "graphql-tag";

const GET_SERVICES_BY_TYPE = gql`
  query Products($id: Int!) {
    products(where: { type_id: { _eq: $id } }) {
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
`;

export default GET_SERVICES_BY_TYPE;
