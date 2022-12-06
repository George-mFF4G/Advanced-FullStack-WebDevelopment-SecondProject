import Client from '../database';

export type Product = {
  id?: number;
  name: string;
  describe: string;
  price: number;
};

export class ProductsStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products';
      const product = await conn.query(sql);
      conn.release();
      return product.rows;
    } catch (err) {
      throw new Error(`Cannot Get The Products. ${err}.`);
    }
  }
  async show(id: string): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const conn = await Client.connect();
      const product = await conn.query(sql, [id]);
      conn.release();
      return product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Get The Specific Product:${id}. ${err}.`);
    }
  }
  async create(p: Product): Promise<Product> {
    try {
      const sql =
        'INSERT INTO products (name, describe, price) VALUES($1, $2, $3) RETURNING *';
      const conn = await Client.connect();
      const result = await conn.query(sql, [p.name, p.describe, p.price]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Cannot Add New Product. ${err}.`);
    }
  }
  async update(p: Product, id: string): Promise<Product> {
    try {
      const sql =
        'UPDATE products SET name=$1, describe=$2, price=$3 WHERE id=$4 RETURNING *';
      const conn = await Client.connect();
      const product = await conn.query(sql, [p.name, p.describe, p.price, id]);
      conn.release();
      return product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Update Product. ${err}.`);
    }
  }
  async delete(id: string): Promise<Product> {
    try {
      const sql = 'DELETE FROM products WHERE id=($1)';
      const conn = await Client.connect();
      const product = await conn.query(sql, [id]);
      conn.release();
      return product.rows[0];
    } catch (err) {
      throw new Error(`Cannot Delete The Product. ${err}.`);
    }
  }
}
