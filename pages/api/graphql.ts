import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schema";
import { createContext } from "@/lib/context";
import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { PageConfig } from "next";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  context: createContext,
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV === "production" ? false : true,
});

const startServer = apolloServer.start();

const cors = Cors();

export default cors(async (req: any, res: any) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});
