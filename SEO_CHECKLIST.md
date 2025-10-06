SEO Checklist for AnoshaGasht

1. Technical
- Ensure `app/sitemap.xml` and `app/robots.txt` are reachable.
- Add site to Google Search Console and submit sitemap.
- Use `lib/seo.buildMetadata` for per-page metadata.
- Ensure OG images exist (default: `/og?title=...`).
- Host fonts locally in `public/fonts/` and use `@font-face` + preload for best FCP.

2. Content
- Title: include primary keyword, keep under 60 chars.
- Meta description: 120-160 chars, unique per page.
- H1/H2: include keywords naturally.
- Images: include descriptive alt text.
- Internal links: link to important pages from content.

3. Monitoring
- Connect to Google Search Console.
- Set up GitHub Action `ping-sitemap.yml` with `SITE_URL` secret.
- Run Lighthouse monthly and track Core Web Vitals.

4. Next steps
- Add dynamic OG images with @vercel/og for visual sharing.
- Extend sitemap to include dynamic content from CMS or markdown.
