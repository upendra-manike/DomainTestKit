export type QueryResult = {
  rowCount: number;
  rows: Array<Record<string, unknown>>;
};

export class DbClient {
  async query(sql: string): Promise<QueryResult> {
    // Placeholder for a real DB adapter (pg/mysql/mssql).
    console.log(`Executing SQL: ${sql}`);
    return { rowCount: 0, rows: [] };
  }
}
