import { IContext } from "../../interfaces/context.interface";
import { mybookStorage } from "../../storage/mybook.storage";
import { userStorage } from "../../storage/user.storage";

export const MyBooks = {
  books: async (
    parent: { user_id: string },
    args: any,
    ctx: IContext,
    info: any
  ) => {
    return await mybookStorage.getBooksByUserId(parent.user_id, ctx.db);
  },

  user: async (
    parent: { user_id: string },
    args: any,
    ctx: IContext,
    info: any
  ) => {
    return await userStorage.getById(parent.user_id, ctx.db);
  },
};
