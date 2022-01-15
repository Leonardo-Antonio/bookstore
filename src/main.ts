import { GraphQLServer } from "graphql-yoga";
import { getConnection } from "./db/connection";
import { resolvers } from "./resolvers/resolvers";
import dotenv from "dotenv";

dotenv.config();

const pg_client = getConnection();
pg_client.connect();

const server = new GraphQLServer({
  typeDefs: "./src/schema/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      db: pg_client,
      request,
    };
  },
});

server.start(({ port = 8000 }) => {
  console.log(`server on port ${port} http://localhost:${port}`);
});
