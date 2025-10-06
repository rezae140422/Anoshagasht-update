import { NextResponse } from 'next/server';
import { findUserByEmail, saveUser } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;
  if (!name || !email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

  const existing = await findUserByEmail(email);
  if (existing) return NextResponse.json({ error: 'User exists' }, { status: 409 });

  const hashed = await hashPassword(password);
  await saveUser({ name, email, password: hashed });
  return NextResponse.json({ ok: true });
}
