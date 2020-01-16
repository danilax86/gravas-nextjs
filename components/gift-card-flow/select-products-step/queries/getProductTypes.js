import gql from "graphql-tag";

const GET_PRODUCT_TYPES = gql`
  query {
    types {
      id
      name
    }
  }
`;

export default GET_PRODUCT_TYPES;
