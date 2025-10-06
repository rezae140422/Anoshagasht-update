import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';

const USERS_JSON = path.join(process.cwd(), 'data', 'users.json');

export async function getMySqlConnection() {
  const host = process.env.DB_HOST;
  if (!host) return null;
  return mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
  });
}

export async function findUserByEmail(email: string) {
  const pool = await getMySqlConnection();
  if (pool) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
    return (rows as any[])[0] || null;
  }

  // Fallback to JSON file
  try {
    if (!fs.existsSync(USERS_JSON)) return null;
    const users = JSON.parse(fs.readFileSync(USERS_JSON, 'utf8')) as any[];
    return users.find((u) => u.email === email) || null;
  } catch (e) {
    return null;
  }
}

export async function saveUser(user: any) {
  const pool = await getMySqlConnection();
  if (pool) {
    await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password]);
    return;
  }

  // Fallback
  const dir = path.dirname(USERS_JSON);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const users = fs.existsSync(USERS_JSON) ? JSON.parse(fs.readFileSync(USERS_JSON, 'utf8')) : [];
  users.push(user);
  fs.writeFileSync(USERS_JSON, JSON.stringify(users, null, 2));
}
