import { gql } from '@apollo/client';

export const QUERY_INSTALLATION = gql`
  query Installations($id: ID!) {
    installation( where: {id: $id }) {
      title
      materials
      location
      year
      images {
        id
        url
      }
      photographerCredit
    }
  }
`;