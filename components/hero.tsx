"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles } from "lucide-react"

export default function ModernHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable parallax effect on desktop devices
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current || window.innerWidth < 768) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = (clientX - innerWidth / 2) / 50
      const moveY = (clientY - innerHeight / 2) / 50

      parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 sm:pt-20 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-black/90"></div>

        {/* Animated gradient orbs - adjusted for mobile */}
        <div className="absolute top-1/3 left-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-red-500/20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-amber-500/20 blur-[100px] animate-pulse-slow delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 py-8 sm:py-0">
          {/* Hero content */}
          <div className="flex-1 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
              <span className="font-medium">معرفی دستیار هوش مصنوعی انوشا</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="block">کارت رو پیشرفته کن</span>
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                تجربه‌ای نو در دنیای دیجیتال با آنوشاگشت
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              شیوه کار کردن‌ت رو با پلتفرم هوش‌مصنوعی ما متحول کن. گردش‌کارها رو خودکار کن، بینش‌های ارزشمند به دست بیار و بهره‌وری‌ت رو افزایش بده
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col max-w-[90%] mx-auto sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                شروع آزمایش رایگان
                <ArrowRight className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                تماس برای دمو
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-2 sm:gap-4 flex-wrap sm:flex-nowrap"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-xs"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <span className="text-white/70">مورد اعتمادِ</span> <span className="font-bold">10,000+</span>{" "}
                <span className="text-white/70">شرکت‌ها</span>
              </div>
              <div className="flex items-center gap-0.5 sm:gap-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
              </div>
            </motion.div>
          </div>

          {/* Hero image */}
          <div className="flex-1 relative mt-8 lg:mt-0 max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-lg opacity-70"></div>
                <div
                  ref={parallaxRef}
                  className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                >
                  <Image
                    src="/images/hero.webp"
                    alt="پیش‌نمایش داشبورد"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />

                  {/* Floating UI elements - hidden on smallest screens */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-2 sm:p-3 shadow-lg hidden xs:flex"
                  >
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs sm:text-sm font-medium">سیستم آنلاین</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-2 sm:p-3 shadow-lg hidden xs:flex"
                  >
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse"></div>
                      <span className="text-xs">در حال پردازش داده‌ها...</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements - reduced on mobile */}
            <div className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-10 h-10 sm:w-20 sm:h-20 border border-white/10 rounded-full hidden sm:block"></div>
            <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 w-6 h-6 sm:w-10 sm:h-10 border border-white/10 rounded-full hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
