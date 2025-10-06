"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "آزمایش رایگان چگونه کار می‌کند؟",
      answer:
        "آزمایش رایگان ما دسترسی کامل به همه امکانات را برای ۱۴ روز بدون نیاز به کارت اعتباری فراهم می‌کند. شما می‌توانید در هر زمان در طول یا پس از دوره آزمایشی به یک پلن پولی ارتقا دهید.",
    },
    {
      question: "آیا برای استارتاپ‌ها یا سازمان‌های غیرانتفاعی تخفیف ارائه می‌دهید؟",
      answer:
        "بله، ما قیمت‌گذاری ویژه‌ای برای استارتاپ‌ها، سازمان‌های غیرانتفاعی و مؤسسات آموزشی ارائه می‌دهیم. لطفاً برای اطلاعات بیشتر با تیم فروش ما تماس بگیرید.",
    },
    {
      question: "آیا می‌توانم بعداً پلنم را تغییر دهم؟",
      answer:
        "حتماً! شما می‌توانید در هر زمان پلن خود را ارتقا، کاهش یا تغییر دهید. تغییرات اشتراک به‌صورت پراورت در باقیمانده دوره صورتحساب شما اعمال می‌شود.",
    },
    {
      question: "چه نوع پشتیبانی ارائه می‌دهید؟",
      answer:
        "ما برای همه مشتریان پشتیبانی ایمیلی ارائه می‌دهیم؛ برای پلن‌های سازمانی پشتیبانی اولویت‌دار و مدیران حساب اختصاصی داریم. تیم پشتیبانی ما ۲۴/۷ در دسترس است.",
    },
    {
      question: "آیا داده‌های من امن است؟",
      answer:
        "امنیت اولویت اصلی ماست. ما از رمزگذاری استاندارد صنعتی، بازرسی‌های منظم امنیتی و کنترل‌های دسترسی سخت‌گیرانه استفاده می‌کنیم تا داده‌های شما همیشه محافظت شوند. همه داده‌ها در دیتاسنترهای مطابق با SOC 2 ذخیره می‌شوند.",
    },
    {
      question: "آیا می‌توانم داده‌هایم را صادر (اکسپورت) کنم؟",
      answer:
        "بله، می‌توانید در هر زمان داده‌های خود را در فرمت‌های مختلف مانند CSV، JSON و PDF صادر کنید. ما معتقدیم داده‌های شما متعلق به شماست و آسان می‌کنیم که در صورت نیاز آن‌ها را همراه خود ببرید.",
    },
  ]

  return (
    <section className="py-4 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">سوالات متداول</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            سوالی دارید؟ ما اینجا هستیم تا کمک کنیم. اگر سوال شما در اینجا نیست، لطفاً با ما تماس بگیرید.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg font-medium hover:no-underline hover:bg-white/5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-sm sm:text-base text-white/70">
            هنوز سوالی داری؟ {" "}
            <a href="#contact" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
              با تیم پشتیبانی ما تماس بگیرید
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
