import { siteName } from '@/lib/seo'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || siteName

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stop-color="#ef4444" />
        <stop offset="1" stop-color="#f59e0b" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#000" />
    <rect x="60" y="60" width="1080" height="510" rx="24" fill="url(#g)" opacity="0.12" />
    <text x="120" y="320" font-size="56" fill="#fff" font-family="Vazir, Tahoma, Arial, sans-serif">${escapeXml(title)}</text>
  </svg>`

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  })
}

function escapeXml(str: string) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  } as Record<string,string>)[c])
}
