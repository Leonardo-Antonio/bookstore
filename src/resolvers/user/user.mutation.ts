import { IContext } from "../../interfaces/context.interface";
import { IUser } from "../../interfaces/user.interface";
import { v4 as uuid } from "uuid";
import { userStorage } from "../../storage/user.storage";
import { generateToken } from "../../utils/token.utils";
import bcrypt from "bcrypt";

export const userMutation = {
  signUp: async (
    parent: any,
    args: { data: IUser },
    ctx: IContext,
    info: any
  ) => {
    const user = args.data;
    user.id = uuid().substring(0, 10);
    user.pass = (await bcrypt.hash(user.pass.toString(), 10)).toString();

    try {
      await userStorage.create(
        user.id,
        user.full_name,
        user.email,
        user.pass,
        ctx.db
      );
    } catch (error) {
      throw error;
    }

    return {
      user: args.data,
      token: generateToken(args.data),
    };
  },
};
