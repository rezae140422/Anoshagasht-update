"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Users, Shield, BarChart3 } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ModernFeatures() {
  const [activeTab, setActiveTab] = useState("analytics")
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  // تنظیم مقدار mounted به true در سمت کلاینت
  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      id: "analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Advanced Analytics",
      description:
        "Gain deep insights with our powerful analytics tools. Track performance, identify trends, and make data-driven decisions.",
      benefits: [
        "Real-time data visualization",
        "Custom reporting dashboards",
        "Predictive analytics with AI",
        "Automated insights generation",
      ],
      image: "/images/hero1.webp",
    },
    {
      id: "automation",
      icon: <Zap className="h-5 w-5" />,
      title: "Intelligent Automation",
      description:
        "Streamline your workflows with smart automation. Reduce manual tasks and focus on what matters most.",
      benefits: [
        "Workflow automation builder",
        "Trigger-based actions",
        "Integration with 100+ tools",
        "AI-powered suggestions",
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "collaboration",
      icon: <Users className="h-5 w-5" />,
      title: "Team Collaboration",
      description:
        "Work seamlessly with your team in real-time. Share, edit, and collaborate on projects from anywhere.",
      benefits: [
        "Real-time document editing",
        "Project management tools",
        "Team chat and video calls",
        "Permission controls",
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "security",
      icon: <Shield className="h-5 w-5" />,
      title: "Enterprise Security",
      description: "Protect your data with enterprise-grade security. Ensure compliance and maintain privacy.",
      benefits: [
        "End-to-end encryption",
        "Role-based access control",
        "Compliance monitoring",
        "Audit logs and reporting",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // به‌طور خودکار activeTab را زمانی که کاربر تب جدیدی انتخاب می‌کند به‌روز می‌کند
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    
    // تنها در دستگاه‌های موبایل اسکرول کن — رفع مشکل تجربه کاربری مربوط به اسکرول
    if (isMobile && mounted) {
      setTimeout(() => {
        const element = document.getElementById(`${value}-content`)
        if (element) {
          const yOffset = -80 // تنظیم برای ارتفاع هدر
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  // آماده‌سازی ابعاد ثابت برای محتوا تا از جابه‌جایی ناگهانی چیدمان جلوگیری شود
  const contentStyle = {
    minHeight: mounted ? "400px" : "auto", // ارتفاع کمتر برای موبایل
  }

  return (
    <section id="features" className="py-12 px-4 sm:py-16 md:py-24 bg-black relative">
  {/* عناصر پس‌زمینه */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">امکانات پیشرفته و قدرتمند</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            هر آنچه برای ساده‌سازی جریان کار خود نیاز دارید
          </p>
        </motion.div>

        <Tabs defaultValue="analytics" value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-3 sm:pb-0 scrollbar-hide">
            <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10 p-1 rounded-xl flex-nowrap">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg p-2 sm:px-3 sm:py-1.5 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="flex items-center justify-center">{feature.icon}</span>
                    <span className="hidden sm:inline text-sm md:text-base">{feature.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* نمایش عنوان ویژگی در موبایل - تنها در موبایل قابل مشاهده */}
          <div className="sm:hidden text-center mb-4">
            <h3 className="text-lg font-bold">{features.find(f => f.id === activeTab)?.title}</h3>
          </div>

          <div style={contentStyle} className="relative">
            {features.map((feature) => (
              <TabsContent
                key={feature.id}
                value={feature.id}
                className="focus-visible:outline-none focus-visible:ring-0 scroll-mt-20 absolute top-0 left-0 w-full transition-opacity"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* تصویر که ابتدا در موبایل نمایش داده می‌شود و نمایش ساده‌تر ویژگی */}
                    <div className="relative order-first mb-4 md:hidden min-h-[185px]">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-md opacity-70"></div>
                      <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-1">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          className="w-full h-auto rounded-lg"
                           
                        />
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-sm sm:text-base mb-4 mt-8 sm:mb-6">{feature.description}</p>

                    {/* فهرست ساده‌شده‌تر برای موبایل */}
                    <ul className="space-y-2 sm:space-y-3">
                      {feature.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
                          <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center text-xs font-bold">
                            ✓
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* نمای تصویر در دسکتاپ */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative hidden md:block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-lg opacity-70"></div>
                    <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-1 ">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title} 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
