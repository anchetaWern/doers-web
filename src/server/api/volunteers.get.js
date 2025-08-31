import { Client } from '@neondatabase/serverless';

export default defineEventHandler(async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });
  await client.connect();

  const result = await client.query('SELECT name FROM volunteers');

  await client.end();
  return result.rows;
});
