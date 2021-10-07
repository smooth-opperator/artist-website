import { gql } from '@apollo/client';

export const QUERY_VIDEO_LIST = gql`
  query VideoList {
    videos {
      id
    }
  }
`;