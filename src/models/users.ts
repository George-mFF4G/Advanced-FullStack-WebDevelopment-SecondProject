import Client from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  person_details: string;
  username: string;
  user_password: string;
};

const salt_rounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;

export class usersStore {
  async register(u: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO users (first_name, last_name, person_details, username, user_password) VALUES($1, $2, $3, $4, $5) RETURNING *';
      const hash = bcrypt.hashSync(
        u.user_password + pepper,
        parseInt(salt_rounds as string)
      );
      const user = await conn.query(sql, [
        u.first_name,
        u.last_name,
        u.person_details,
        u.username,
        hash,
      ]);
      conn.release();
      return user.rows[0];
    } catch (err) {
      throw new Error(`Cannot Create User. ${err}.`);
    }
  }
  async login(username: string, password: string): Promise<User | null> {
    const conn = await Client.connect();
    const sql = 'SELECT user_password FROM users WHERE username=($1)';
    const result = await conn.query(sql, [username]);
    if (result.rows.length) {
      const user = result.rows[0];
      if (bcrypt.compareSync(password + pepper, user.user_password)) {
        console.log('Login Accepted.');
        return user;
      }
      console.log('Login not accepted.');
    }
    return null;
  }
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM USERS';
      const users = await conn.query(sql);
      conn.release();
      return users.rows;
    } catch (err) {
      throw new Error(`Cannot Display The Users. ${err}.`);
    }
  }
  async show(id: string): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE id = $1';
      const user = await conn.query(sql, [id]);
      conn.release();
      return user.rows[0];
    } catch (err) {
      throw new Error(`Cannot Display The Specific User. ${err}.`);
    }
  }
  async update(u: User, id: string): Promise<User> {
    try {
      const sql =
        'UPDATE users SET first_name=$1, last_name=$2, person_details=$3, username=$4, user_password=$5 WHERE id=$6 RETURNING *';
      const conn = await Client.connect();
      const hash = bcrypt.hashSync(
        u.user_password + pepper,
        parseInt(salt_rounds as string)
      );
      const result = await conn.query(sql, [
        u.first_name,
        u.last_name,
        u.person_details,
        u.username,
        hash,
        id,
      ]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Cannot update User Details. ${err}.`);
    }
  }
  async delete(id: string): Promise<User> {
    try {
      const sql = 'DELETE FROM users WHERE id=($1)';
      const conn = await Client.connect();
      const user = await conn.query(sql, [id]);
      conn.release();
      return user.rows[0];
    } catch (err) {
      throw new Error(`Cannot Delete The User. ${err}.`);
    }
  }
}
