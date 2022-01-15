import { IBook } from "../../interfaces/book.interface";
import { IContext } from "../../interfaces/context.interface";
import { IUser } from "../../interfaces/user.interface";
import { bookStorage } from "../../storage/book.storage";

export const bookQuery = {
  getBooks: async (
    parent: any,
    args: any,
    ctx: IContext,
    info: any
  ): Promise<IBook[]> => {
    let books: Array<IBook>;
    try {
      books = await bookStorage.getAll(ctx.db);
    } catch (error) {
      throw error;
    }

    return books;
  },
};
