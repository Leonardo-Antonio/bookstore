import { IAuthor } from "../../interfaces/author.interface";
import { IContext } from "../../interfaces/context.interface";
import { IUser } from "../../interfaces/user.interface";
import { authorStorage } from "../../storage/author.storage";

export const authorQuery = {
  getAuthors: async (
    _: any,
    args: any,
    ctx: IContext,
    info: any
  ): Promise<IAuthor[]> => {
    let authors: Array<IAuthor> = [];
    try {
      authors = await authorStorage.getAll(ctx.db);
    } catch (error) {throw error}

    return authors;
  },
};
