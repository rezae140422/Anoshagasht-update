import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.redirect('https://www.linkedin.com/oauth/v2/authorization');
}
