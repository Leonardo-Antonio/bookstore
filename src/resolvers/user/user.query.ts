import { IContext } from "../../interfaces/context.interface";
import { IUser } from "../../interfaces/user.interface";
import { userStorage } from "../../storage/user.storage";

export const userQuery = {
  getUsers: async (
    parent: any,
    args: any,
    ctx: IContext,
    info: any
  ): Promise<IUser[]> => {
    return await userStorage.getAll(ctx.db);
  },
};
