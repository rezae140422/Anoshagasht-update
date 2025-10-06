import { siteUrl } from '@/lib/seo'

export async function GET() {
  // List your important static routes here. Extend this list from CMS or data sources as needed.
  const staticPaths = ['/', '/pricing', '/testimonials', '/about', '/contact']

  const urls = staticPaths
    .map((path) => {
      const loc = new URL(path, siteUrl).toString()
      const lastmod = new Date().toISOString()
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  })
}
