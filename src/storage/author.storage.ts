import { Client } from "pg";
import { IAuthor } from "../interfaces/author.interface";

export const authorStorage = {
  async created(id: string, full_name: string, country: string, db: Client) {
    const query = {
      text: "INSERT INTO author (id, full_name, country) VALUES ($1, $2, $3)",
      values: [id, full_name, country],
    };

    try {
      const response = await db.query(query);
    } catch (error) {
      throw error;
    }
  },

  async getAll(db: Client): Promise<IAuthor[]> {
    try {
      const result = await db.query("SELECT * FROM author");
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  async getById(id: String, db: Client): Promise<IAuthor> {
    const query = {
      text: "SELECT * FROM author WHERE id = $1",
      values: [id],
    };
    const result = await db.query(query);
    const data: IAuthor = result.rows[0];
    return data;
  },
};
