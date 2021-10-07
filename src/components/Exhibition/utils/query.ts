import { gql } from '@apollo/client';

export const QUERY_EXHIBITION = gql`
  query Exhibitions($id: ID!) {
    exhibition( where: {id: $id }) {
      title
      startDate
      endDate
      type
      galleryName
      location
      images {
        id
        url
      }
      about {
        url
      }
      photographerCredit
    }
  }
`;