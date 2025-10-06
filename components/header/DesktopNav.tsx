"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavDropdown from "./NavDropdown"

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["آنالیز", "خودکارسازی", "همکاری", "امنیت"]
  const solutionItems = ["برای استارتاپ‌ها", "برای شرکت‌ها", "برای تیم‌ها", "برای توسعه‌دهندگان"]

  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Enhanced dropdown management function
  const handleActiveDropdown = (id: string | null) => {
    setActiveDropdown(id)
  }

  return (
    <>
  <nav dir="ltr" className="hidden md:flex items-center gap-4 lg:gap-8">
        <NavDropdown 
          id="products"
          label="محصولات" 
          items={productItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />
        
        <NavDropdown 
          id="solutions"
          label="خدمات هوشمند ما" 
          items={solutionItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />

        <Link 
          href="#pricing" 
          className="text-white/80 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          تعرفه‌ها
        </Link>

        <Link 
          href="#testimonials" 
          className="text-white/80 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          بازخورد مشتریان
        </Link>
      </nav>

      <div 
        dir="ltr"
        className="hidden md:flex items-center gap-2 lg:gap-4"
        onMouseEnter={() => setActiveDropdown(null)}
      >
  <Link href="/login">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
          >
            ورود
          </Button>
        </Link>
  <Link href="/register">
          <Button 
          className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-shadow text-sm lg:text-base px-3 lg:px-4"
          >
            شروع کنید
          </Button>
        </Link>
      </div>
    </>
  )
}
