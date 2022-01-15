import { v4 } from "uuid";
import { IContext } from "../../interfaces/context.interface";
import { validateToken } from "../../middleware/token.middleware";
import { mybookStorage } from "../../storage/mybook.storage";

export const myBooksMutation = {
  addMyLibrery: async (
    parent: any,
    args: { user_id: string; book_id: string },
    ctx: IContext,
    info: any
  ): Promise<string> => {
    const payload = validateToken(ctx.request.request.headers.authorization);
    const id = v4().substring(0, 10);
    try {
      await mybookStorage.create(id, args.user_id, args.book_id, ctx.db);
    } catch (error) {
      throw error;
    }
    return id;
  },
};
