import buildMetadata, { organizationJsonLd } from "@/lib/seo"
import HomeClient from "@/components/HomeClient"

export const metadata = buildMetadata({ title: "خانه" })

export default function Home() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(organizationJsonLd({}))}</script>
      <HomeClient />
    </>
  )
}
