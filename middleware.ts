import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiter (per-instance). For production use a distributed store like Redis.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 120; // max requests per window per IP
const ipMap = new Map<string, { count: number; start: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry) {
    ipMap.set(ip, { count: 1, start: now });
    return { allowed: true };
  }
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    ipMap.set(ip, { count: 1, start: now });
    return { allowed: true };
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) return { allowed: false, retryAfter: entry.start + RATE_LIMIT_WINDOW_MS };
  return { allowed: true };
}

export function middleware(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
  const ip = forwarded.split(',')[0].trim() || req.headers.get('x-forwarded-for') || 'unknown';

  const rl = rateLimit(ip);
  if (!rl.allowed) {
    const retryAfter = Math.ceil(((rl as any).retryAfter - Date.now()) / 1000) || 60;
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': String(retryAfter),
      },
    });
  }

  const res = NextResponse.next();

  // Reinforce security headers on the edge
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', "geolocation=(), microphone=(), camera=()");
  res.headers.set('X-XSS-Protection', '0');
  // CSP temporarily disabled for debugging client-side rendering issues.
  // To re-enable, ensure CSP allows Next.js scripts and update both next.config.js and middleware.ts.

  return res;
}

export const config = {
  matcher: '/:path*',
};
