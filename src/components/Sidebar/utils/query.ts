import { gql } from '@apollo/client';

export const QUERY_SIDEBAR = gql`
  query Sidebar {
    exhibitions(orderBy: startDate_DESC) {
      id
      title
    }
    installations(orderBy: year_DESC) {
      id
      title
    }
    videos {
      id
      title
    }
    infos {
      id
      cv {
        __typename
      }
      news {
        __typename
      }
      imprint {
        __typename
      }
    }
  }
`;