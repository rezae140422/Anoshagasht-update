import type { Metadata } from "next"
import "./globals.css"
import buildMetadata from "@/lib/seo"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/header"
import ModernFooter from "@/components/footer"


export const metadata: Metadata = buildMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Preconnect to font CDN and preload default OG image for faster LCP */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/og?title=آنوشا%20گشت" />
        {/*
          If you host fonts locally (public/fonts/Vazir.woff2), uncomment the lines below to preload them.
          <link rel="preload" href="/fonts/Vazir.woff2" as="font" type="font/woff2" crossorigin>
        */}
      </head>
      <body className={`bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModernHeader />
          <main>{children}</main>
          <ModernFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}