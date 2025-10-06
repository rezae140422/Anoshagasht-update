"use client"

import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import Hero from "@/components/hero"

// Scroll restoration component
export function ScrollRestorationClient() {
  useEffect(() => {
    window.scrollTo(0, 0)

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [])

  return null
}

// Lazy load components
const SocialProof = dynamic(() => import("@/components/social-proof"), { ssr: false })
const Features = dynamic(() => import("@/components/features"), { ssr: false })
const HowItWorks = dynamic(() => import("@/components/how-it-works"), { ssr: false })
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: false })
const Pricing = dynamic(() => import("@/components/pricing"), { ssr: false })
const Integrations = dynamic(() => import("@/components/integrations"), { ssr: false })
const BlogPreview = dynamic(() => import("@/components/blog-preview"), { ssr: false })
const FaqSection = dynamic(() => import("@/components/faq"), { ssr: false })
const Cta = dynamic(() => import("@/components/cta"), { ssr: false })

// LazyLoad wrapper component
function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { rootMargin: "200px" }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return <div ref={ref}>{inView ? children : null}</div>
}

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-black px-0 sm:px-4 text-white">
      <ScrollRestorationClient />
      <Hero />
      <LazyLoad>
        <SocialProof />
      </LazyLoad>
      <LazyLoad>
        <HowItWorks />
      </LazyLoad>
      <LazyLoad>
        <Features />
      </LazyLoad>
      <LazyLoad>
        <Integrations />
      </LazyLoad>
      <LazyLoad>
        <Testimonials />
      </LazyLoad>
      <LazyLoad>
        <BlogPreview />
      </LazyLoad>
      <LazyLoad>
        <Pricing />
      </LazyLoad>
      <LazyLoad>
        <FaqSection />
      </LazyLoad>
      <LazyLoad>
        <Cta />
      </LazyLoad>
    </div>
  )
}
