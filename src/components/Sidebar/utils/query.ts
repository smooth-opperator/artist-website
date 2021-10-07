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
        id
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