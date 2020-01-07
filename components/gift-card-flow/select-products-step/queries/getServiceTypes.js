import gql from "graphql-tag";

const GET_SERVICE_TYPES = gql`
  query {
    types {
      id
      name
    }
  }
`;

export default GET_SERVICE_TYPES;
