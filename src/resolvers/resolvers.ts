import { authorMutation } from "./author/author.mutation";
import { authorQuery } from "./author/author.query";
import { bookMutation } from "./book/book.mutation";
import { bookQuery } from "./book/book.query";
import { userMutation } from "./user/user.mutation";
import { userQuery } from "./user/user.query";
import { Book } from "./book/book.root";
import { myBooksQuery } from "./mybooks/mybooks.query";
import { MyBooks } from "./mybooks/mybook.root";
import { myBooksMutation } from "./mybooks/mybook.mutation";

export const resolvers = {
  Query: {
    ...userQuery,
    ...authorQuery,
    ...bookQuery,
    ...myBooksQuery,
  },
  Book,
  MyBooks,
  Mutation: {
    ...userMutation,
    ...authorMutation,
    ...bookMutation,
    ...myBooksMutation,
  },
};
