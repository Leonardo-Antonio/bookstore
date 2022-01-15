import { v4 } from "uuid";
import { IBookPayload, IBook } from "../../interfaces/book.interface";
import { IContext } from "../../interfaces/context.interface";
import { bookStorage } from "../../storage/book.storage";

export const bookMutation = {
  newBook: async (
    parent: any,
    args: { data: IBookPayload },
    ctx: IContext,
    info: any
  ): Promise<String> => {
    const id = v4().substring(0, 10);
    const book = args.data;
    try {
      await bookStorage.create(
        id,
        book.title,
        book.description,
        book.author_id,
        ctx.db
      );
    } catch (error) {
      throw error;
    }
    return id;
  },
};
