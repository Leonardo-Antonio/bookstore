import { IUser } from "../interfaces/user.interface";
import token from "jsonwebtoken";

export function generateToken(data: IUser): String {
  const secret: string =
    process.env.PASS_SECRET == undefined ? "" : process.env.PASS_SECRET;
  return token.sign(data, secret);
}
