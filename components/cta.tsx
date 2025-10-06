"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ModernCta() {
  return (
    <section className="py-16 pb-20 px-3 sm:px-0 sm:py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-transparent to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-lg opacity-70"></div>
            <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">آیا آماده تحول در جریان کار خود هستید؟</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
                به جمع هزاران مشتری راضی بپیوندید که در حال حاضر از آنوشاگشت برای ساده‌سازی عملیات و افزایش بهره‌وری خود استفاده می‌کنند.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                  شروع آزمایش رایگان
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                  برنامه‌ریزی دمو
                </Button>
              </div>

              <p className="mt-4 sm:mt-6 text-white/50 text-xs sm:text-sm">بدون نیاز به کارت اعتباری. 14 روز آزمایش رایگان.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
