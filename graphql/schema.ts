import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Quote {
    id: ID!
    tag: String!
    author: String!
    content: String!
  }
  type Query {
    quotes: [Quote!]!
    quoteById(id: ID!): Quote!
  }
`;
