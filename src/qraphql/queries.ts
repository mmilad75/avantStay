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

export const GET_HOMES = gql`
  query Homes($region: UUID, $page: Int, $pageSize: Int) {
    homes (region: $region, page: $page, pageSize: $pageSize) {
      count
      results {
        id
        title
        bedsCount
        bathroomsCount
        roomsCount
        regionName
        hasPool
        cityName
        stateCode
        maxOccupancy
        photos {
          listOrder
          url
        }
      }
    }
  }
`;

export const GET_HOME = gql`
  query Home($id: UUID!) {
    home (id: $id) {
      id
      title
      description
      photos {
        url
        listOrder
      }
      roomsCount
      bathroomsCount
      bedsCount
      maxOccupancy
      hasPool
      amenities
      regionName
      cityName
      stateName
      stateCode
    }
  }
`;
