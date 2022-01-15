import { Client } from "pg";

export const getConnection = (): Client => {
  return new Client({
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    port: Number(process.env.PORT_DB),
  });
};
