import { Client } from "pg";
import { IBook } from "../interfaces/book.interface";

export const bookStorage = {
  async create(
    id: String,
    title: String,
    description: String,
    author_id: String,
    db: Client
  ) {
    const query = {
      text: "INSERT INTO books (id, title, description, author_id) VALUES ($1, $2, $3, $4)",
      values: [id, title, description, author_id],
    };

    try {
      await db.query(query);
    } catch (error) {
      throw error;
    }
  },

  async getAll(db: Client): Promise<IBook[]> {
    try {
      const result = await db.query("SELECT * FROM books");
      return result.rows;
    } catch (error) {
      throw error;
    }
  },
};
