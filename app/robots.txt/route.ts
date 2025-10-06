import { siteUrl } from '@/lib/seo'

export async function GET() {
  const sitemapUrl = new URL('/sitemap.xml', siteUrl).toString()
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  })
}
