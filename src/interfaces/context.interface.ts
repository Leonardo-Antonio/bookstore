import { ContextParameters } from "graphql-yoga/dist/types";
import { Client } from "pg";

export interface IContext {
  db: Client;
  request: ContextParameters;
}
