import { gql } from '@apollo/client';

export const QUERY_INFO_LIST = gql`
  query InfoList {
    infos {
      id
      cv {
        id
        url
      }
      news {
        html
      }
      imprint {
        html
      }
    }
  }
`;