import { gql } from "apollo-server-micro";

export const GET_QUOTES = gql`
  query Quotes {
    quotes {
      id
      content
      tag
      author
    }
  }
`;

export const GET_QUOTES_BY_ID = gql`
  query Quotes($quoteByIdId: ID!) {
    quoteById(id: $quoteByIdId) {
      author
      content
      id
      tag
    }
  }
`;
