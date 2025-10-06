import type { Metadata } from "next"

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
export const siteName = "آنوشا گشت | AnoshaGasht"
export const defaultDescription =
  "شیوه‌ی کار خود را با پلتفرم مبتنی بر هوش مصنوعی ما تغییر دهید. گردش‌کارها را خودکار کنید، بینش کسب کنید و بهره‌وری را افزایش دهید."

type BuildMetadataInput = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: "website" | "article"
}

export function buildMetadata(input: BuildMetadataInput = {}): Metadata {
  const title = input.title ? `${input.title} | ${siteName}` : siteName
  const description = input.description ?? defaultDescription
  const url = input.path ? new URL(input.path, siteUrl).toString() : siteUrl
  const image = input.image
    ? new URL(input.image, siteUrl).toString()
    : `${siteUrl}/og.png?title=${encodeURIComponent(siteName)}`

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title,
      description,
      url,
      type: input.type ?? "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

// JSON-LD helpers
export function organizationJsonLd(opts: {name?: string; url?: string; logo?: string}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: opts.name ?? siteName,
    url: opts.url ?? siteUrl,
    logo: opts.logo ?? `${siteUrl}/placeholder-logo.png`,
  }
}

export function websiteJsonLd(opts: {url?: string; name?: string}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: opts.url ?? siteUrl,
    name: opts.name ?? siteName,
  }
}

export function breadcrumbJsonLd(items: {position: number; name: string; item: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it) => ({
      "@type": "ListItem",
      position: it.position,
      name: it.name,
      item: it.item,
    })),
  }
}

export default buildMetadata
