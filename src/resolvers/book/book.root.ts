import { IAuthor } from "../../interfaces/author.interface";
import { IBookPayload } from "../../interfaces/book.interface";
import { IContext } from "../../interfaces/context.interface";
import { authorStorage } from "../../storage/author.storage";

export const Book = {
  author: async (parent: IBookPayload, args: any, ctx: IContext, info: any) => {
    let author: IAuthor;
    try {
      author = await authorStorage.getById(parent.author_id, ctx.db);
    } catch (error) {
      throw error;
    }

    return author;
  },
};
