import { v4 as uuid } from "uuid";
import { IAuthor } from "../../interfaces/author.interface";
import { IContext } from "../../interfaces/context.interface";
import { authorStorage } from "../../storage/author.storage";

export const authorMutation = {
  newAuthor: async (
    parent: any,
    args: { data: IAuthor },
    ctx: IContext,
    info: any
  ) => {
    const author = args.data;
    author.id = uuid().substring(0, 10);

    try {
      await authorStorage.created(
        author.id,
        author.full_name,
        author.country,
        ctx.db
      );
    } catch (error) {
      throw error;
    }

    return author;
  },
};
