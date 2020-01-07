import gql from "graphql-tag";

const GET_PRODUCT_BY_NAME = gql`
  query Products($name: String!) {
    products(where: { name: { _eq: $name } }, limit: 1) {
      id
      name
    }
  }
`;

export default GET_PRODUCT_BY_NAME;
