import { gql } from '@apollo/client';

export const QUERY_INSTALLATIONS_LIST = gql`
  query InstallationsList {
    installations(orderBy: year_DESC) {
      id
    }
  }
`;