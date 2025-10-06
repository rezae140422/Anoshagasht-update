import { NextResponse } from 'next/server';

const store = new Map();

export async function POST(req: Request) {
  const { phone } = await req.json();
  if (!phone) return NextResponse.json({ error: 'Missing phone' }, { status: 400 });
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  store.set(phone, { code, expires: Date.now() + 5 * 60 * 1000 });
  console.log('OTP for', phone, code);
  return NextResponse.json({ ok: true });
}
