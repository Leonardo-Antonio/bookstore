import { IContext } from "../../interfaces/context.interface";
import { validateToken } from "../../middleware/token.middleware";

export const myBooksQuery = {
  getMyBooks: (
    parent: any,
    args: { user_id: string },
    ctx: IContext,
    info: any
  ) => {
    const payload = validateToken(ctx.request.request.headers.authorization);
    return { user_id: args.user_id };
  },
};
