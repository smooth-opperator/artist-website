import { gql } from '@apollo/client';

export const QUERY_INFO_LIST = gql`
  query InfoList {
    infos {
      id
      cv {
        html
        text
        markdown
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