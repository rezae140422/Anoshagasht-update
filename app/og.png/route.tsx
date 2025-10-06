import { ImageResponse } from 'next/og'
import { siteName } from '@/lib/seo'

export const runtime = 'edge'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || siteName

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: '#000',
            color: 'white',
            fontFamily: 'Vazir, Tahoma, Arial, sans-serif',
          }}
        >
          <div style={{ padding: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 40, opacity: 0.9, marginBottom: 18 }}>آنوشا گشت</div>
            <div style={{ fontSize: 56, fontWeight: 700 }}>{title}</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    return new Response(`Failed to generate the image`, { status: 500 })
  }
}
