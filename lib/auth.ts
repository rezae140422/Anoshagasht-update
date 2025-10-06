import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: object, expiresIn = '7d') {
  // Use a safe cast to avoid strict overload mismatches in typings across jsonwebtoken versions
  return (jwt as any).sign(payload, JWT_SECRET as any, { expiresIn } as any);
}

export function verifyToken(token: string) {
  try {
    return (jwt as any).verify(token, JWT_SECRET as any);
  } catch (e) {
    return null;
  }
}
