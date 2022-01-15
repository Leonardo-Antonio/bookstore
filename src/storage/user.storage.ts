import { Client } from "pg";
import { IUser } from "../interfaces/user.interface";

export const userStorage = {
  async getById(user_id: string, db: Client): Promise<IUser> {
    const query = {
      text: "SELECT * from users WHERE id = $1",
      values: [user_id],
    };
    const result = await db.query(query);
    return result.rows[0];
  },

  async create(
    id: String,
    full_name: String,
    email: String,
    pass: String,
    db: Client
  ) {
    const query = {
      text: "INSERT INTO users(id, full_name, email, pass) VALUES($1, $2, $3, $4)",
      values: [id, full_name, email, pass],
    };

    try {
      const response = await db.query(query);
    } catch (error) {
      throw error;
    }
  },

  async getAll(db: Client): Promise<IUser[]> {
    try {
      const result = await db.query("SELECT * from users");
      return result.rows;
    } catch (error) {
      throw error;
    }
  },
};
