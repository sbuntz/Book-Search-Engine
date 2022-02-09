import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query me {
    tech {
      _id
      username
      email
      savedBooks {
        _id
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;