import { IAuthor } from "./author.interface";

export interface IBookPayload {
  title: String;
  description: String;
  author_id: String;
}

export interface IBook {
  id: String;
  title: String;
  description: String;
  author: IAuthor;
}
