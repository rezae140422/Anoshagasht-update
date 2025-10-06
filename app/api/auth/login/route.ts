import { NextResponse } from 'next/server';
import { findUserByEmail } from '@/lib/db';
import { verifyPassword, signToken } from '@/lib/auth';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;
  if (!email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

  const user = await findUserByEmail(email);
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const ok = await verifyPassword(password, user.password);
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = signToken({ id: user.id, email: user.email });
  return NextResponse.json({ token, user: { id: user.id, email: user.email, name: user.name } });
}
