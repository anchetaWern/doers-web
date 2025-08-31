// works!
import { neon } from '@neondatabase/serverless';

export default defineEventHandler(async () => {
  const sql = neon(process.env.DATABASE_URL);

  const result = await sql`SELECT name FROM volunteers`;

  return result;
});
