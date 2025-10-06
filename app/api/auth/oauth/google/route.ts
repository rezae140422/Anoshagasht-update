import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // Redirect to Google OAuth consent screen (placeholder)
  return NextResponse.redirect('https://accounts.google.com/o/oauth2/v2/auth');
}
