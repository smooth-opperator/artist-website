import { gql } from '@apollo/client';

export const QUERY_EXHIBITION_LIST = gql`
  query ExhibitionList {
    exhibitions: exhibitions(orderBy: startDate_DESC) {
        id
    }
  }
`;