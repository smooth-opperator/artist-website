import { gql } from '@apollo/client';

export const QUERY_VIDEO = gql`
  query Videos($id: ID!) {
    video( where: {id: $id }) {
      title
      materials
      location
      year
      url
    }
  }
`;