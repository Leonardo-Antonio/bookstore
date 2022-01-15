import { Client } from "pg";

export const mybookStorage = {
  async create(id: string, user_id: string, book_id: string, db: Client) {
    const query = {
      text: "INSERT INTO mybooks (id, user_id, book_id) VALUES ($1, $2, $3)",
      values: [id, user_id, book_id],
    };
    try {
      await db.query(query);
    } catch (error) {
      throw error;
    }
  },

  async getBooksByUserId(user_id: string, db: Client) {
    const query = {
      text: "SELECT * FROM mybooks mb LEFT JOIN books b ON mb.book_id = b.id WHERE mb.user_id = $1",
      values: [user_id],
    };

    const result = await db.query(query);
    return result.rows;
  },
};
