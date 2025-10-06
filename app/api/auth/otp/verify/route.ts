import { NextResponse } from 'next/server';

const store = new Map();

export async function POST(req: Request) {
  const { phone, code } = await req.json();
  if (!phone || !code) return NextResponse.json({ error: 'Missing' }, { status: 400 });
  const entry = store.get(phone);
  if (!entry || entry.expires < Date.now() || entry.code !== code) return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  store.delete(phone);
  return NextResponse.json({ ok: true });
}
