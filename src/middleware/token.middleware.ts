import jwt from "jsonwebtoken";

export function validateToken(token: string | undefined) {
  if (token == undefined) {
    throw new Error("el token es obligatorio");
  }
  const secret: string =
    process.env.PASS_SECRET == undefined ? "" : process.env.PASS_SECRET;
  return jwt.verify(token, secret);
}
