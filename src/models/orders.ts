import Client from '../database';

export type Order = {
  id?: number;
  user_id: number;
  name: string;
  status: string;
};

export class ordersStore {
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders';
      const order = await conn.query(sql);
      conn.release();
      return order.rows;
    } catch (err) {
      throw new Error(`Cannot Get The Orders. ${err}.`);
    }
  }
  async show(id: string): Promise<Order> {
    try {
      const sql = 'SELECT * FROM orders WHERE id=($1)';
      const conn = await Client.connect();
      const product = await conn.query(sql, [id]);
      conn.release();
      return product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Get The Specific Order. ${err}.`);
    }
  }
  async create(o: Order): Promise<Order> {
    try {
      const sql =
        'INSERT INTO orders (name, user_id, status) VALUES($1, $2, $3) RETURNING *';
      const conn = await Client.connect();
      const result = await conn.query(sql, [o.name, o.user_id, o.status]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Cannot Add New Order. ${err}.`);
    }
  }
  async update(o: Order, id: string): Promise<Order> {
    try {
      const sql =
        'UPDATE orders SET name=$1, user_id=$2, status=$3 WHERE id=$4 RETURNING *';
      const conn = await Client.connect();
      const product = await conn.query(sql, [o.name, o.user_id, o.status, id]);
      conn.release();
      return product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Update Order. ${err}.`);
    }
  }
  async delete(id: string): Promise<Order> {
    try {
      const sql = 'DELETE FROM orders WHERE id=($1)';
      const conn = await Client.connect();
      const product = await conn.query(sql, [id]);
      conn.release();
      return product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Delete The Order. ${err}.`);
    }
  }
}
