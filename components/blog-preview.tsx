"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogPreview() {
  const articles = [
    {
      title: "۱۰ راه که هوش مصنوعی اتوماسیون گردش‌کار را متحول می‌کند",
      excerpt: "کشف کنید چگونه هوش مصنوعی شیوه‌ی انجام کارهای تکراری و گردش‌کارها را متحول کرده است.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
      date: "۱۵ می ۲۰۲۳",
      readTime: "۵ دقیقه خواندن",
      category: "فناوری",
    },
    {
      title: "آینده ابزارهای همکاری راه‌دور",
      excerpt: "ببینید چگونه نوآوری‌های اخیر در نرم‌افزارهای همکاری تیمی کار راه‌دور را کارآمدتر کرده‌اند.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      date: "۲۸ آوریل ۲۰۲۳",
      readTime: "۴ دقیقه خواندن",
      category: "بهره‌وری",
    },
    {
      title: "چگونه یک استراتژی داده‌ای مؤثر بسازیم",
      excerpt: "مراحل ضروری برای ساختن یک استراتژی داده که رشد کسب‌وکار و تصمیم‌گیری آگاهانه را هدایت کند را بیاموزید.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
      date: "۱۲ آوریل ۲۰۲۳",
      readTime: "۷ دقیقه خواندن",
      category: "استراتژی",
    },
  ]

  return (
    <section className="py-5 sm:py-20 md:py-24 bg-black relative overflow-hidden" aria-labelledby="blog-heading">
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12"
        >
          <div>
            <h2 id="blog-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">آخرین نظرات</h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl">
              مشاوره تخصصی در زمینه بهره‌وری و فناوری
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-sm sm:text-base focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
              aria-label="مشاهده همه مقالات"
            >
              همه مقالات
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full flex flex-col hover:border-white/20 transition-all">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={`Featured image for article: ${article.title}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div 
                    className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full"
                    aria-label={`Category: ${article.category}`}
                  >
                    {article.category}
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1" aria-label={`Published date: ${article.date}`}>
                      <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1" aria-label={`Reading time: ${article.readTime}`}>
                      <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base mb-4 flex-1 line-clamp-3">{article.excerpt}</p>
                  
                  <Button 
                    variant="link" 
                    className="p-0 text-amber-400 hover:text-amber-300 justify-start text-sm sm:text-base focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    aria-label={`بیشتر بخوانید دربارهٔ ${article.title}`}
                  >
                    بیشتر بخوانید
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
