import { expect } from '@playwright/test';
import { DbClient } from './dbClient';

export class DbValidation {
  constructor(private readonly dbClient: DbClient) {}

  async expectRecordExists(table: string, whereClause: string): Promise<void> {
    const sql = `SELECT * FROM ${table} WHERE ${whereClause}`;
    const result = await this.dbClient.query(sql);
    expect(result.rowCount).toBeGreaterThan(0);
  }
}
