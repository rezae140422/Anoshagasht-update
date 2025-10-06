import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react"

export default function ModernFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-8  sm:py-16  px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-amber-500 rounded-lg rotate-45 transform origin-center"></div>
                <div className="absolute inset-[3px] bg-black rounded-lg flex items-center justify-center text-white font-bold">
                A
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                Anosha
              </span>
            </Link>
            <p className="text-white/70 mb-6">
               بزرگ ترین شرکت طراحی سایت و تبلیغات در ایران و اولین شرکت تبلیغات با هوش مصنوعی 
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">توییتر</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فیس‌بوک</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">اینستاگرام</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">لینکدین</span>
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">گیت‌هاب</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">قایل ارائه</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  ویژگی ها
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  قیمت گذاری
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  یکپارچگی
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  نقشه راه
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  تغییرات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">شرکت</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  مشاغل
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  مشتریان
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">منابع</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  مستندات
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  مرکز راهنما
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  مرجع API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  جامعه
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  استاتوس
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} AnoshaGasht. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
          حریم خصوصی و سایست ها
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              شرایط خدمات
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              سیاست کوکی
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
