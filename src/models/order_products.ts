import Client from '../database';

export type Order_Products = {
  id?: number;
  quantity: number;
  order_id: number;
  product_id: number;
};

export class Order_ProductsStore {
  async index(): Promise<Order_Products[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM order_products';
      const order_product = await conn.query(sql);
      conn.release();
      return order_product.rows;
    } catch (err) {
      throw new Error(`Cannot Get The Orders Details. ${err}.`);
    }
  }
  async show(id: string): Promise<Order_Products> {
    try {
      const sql = 'SELECT * FROM order_products WHERE id=($1)';
      const conn = await Client.connect();
      const order_product = await conn.query(sql, [id]);
      conn.release();
      return order_product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Get The Specific Order Details:${id}. ${err}.`);
    }
  }
  async create(op: Order_Products): Promise<Order_Products> {
    try {
      const sql =
        'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';
      const conn = await Client.connect();
      const order_product = await conn.query(sql, [
        op.quantity,
        op.order_id,
        op.product_id,
      ]);
      conn.release();
      return order_product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Add New Order To Product. ${err}.`);
    }
  }
  async update(op: Order_Products, id: string): Promise<Order_Products> {
    try {
      const sql =
        'UPDATE order_products SET quantity=$1, order_id=$2, product_id=$3 WHERE id=$4 RETURNING *';
      const conn = await Client.connect();
      const order_product = await conn.query(sql, [
        op.quantity,
        op.order_id,
        op.product_id,
        id,
      ]);
      conn.release();
      return order_product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Update Orders Details. ${err}.`);
    }
  }
  async delete(id: string): Promise<Order_Products> {
    try {
      const sql = 'DELETE FROM order_products WHERE id=($1)';
      const conn = await Client.connect();
      const order_product = await conn.query(sql, [id]);
      conn.release();
      return order_product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Delete The Order Details. ${err}.`);
    }
  }
}
