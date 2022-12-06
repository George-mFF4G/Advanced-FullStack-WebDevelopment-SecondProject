import Client from '../database';

export class DashboardQueries {
  async orderByUser(id: string): Promise<{ name: string; status: string }[]> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id = $1;';
      const conn = await Client.connect();
      const orederUser = await conn.query(sql, [id]);
      conn.release();
      return orederUser.rows;
    } catch (error) {
      throw new Error(`Cannot Get Oredr By User Details. ${error}.`);
    }
  }

  async activeOrderByUser(
    id: string
  ): Promise<{ name: string; status: string }[]> {
    try {
      const sql = `SELECT * FROM orders WHERE user_id = $1 AND status ='active' ;`;
      const conn = await Client.connect();
      const orederUser = await conn.query(sql, [id]);
      conn.release();
      return orederUser.rows;
    } catch (error) {
      throw new Error(`Cannot Get Active Oredr By User Details. ${error}.`);
    }
  }
}
