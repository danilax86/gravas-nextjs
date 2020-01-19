import gql from "graphql-tag";

const GET_DESIGNS = gql`
  query {
    designs {
      id
      name
    }
  }
`;

export default GET_DESIGNS;
