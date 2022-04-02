import {gql} from '@apollo/client';

export const GET_REGIONS = gql`
  query {
    regions {
      id
      name
      stateName
    }
  }
`;
