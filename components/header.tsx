"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/lib/i18n/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-police-600 to-police-800 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-police-700 to-police-500 bg-clip-text text-transparent">
                {t('header.title')}
              </h1>
              <p className="text-xs text-muted-foreground">{t('hero.subtitle')}</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5">
              <Link href="#" className="text-sm font-medium hover:text-police-600 transition-colors">
                {t('common.home')}
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-police-600 transition-colors">
                {t('common.services')}
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-police-600 transition-colors">
                {t('common.legal')}
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-police-600 transition-colors">
                {t('common.about')}
              </Link>
            </nav>
            <LanguageSelector />
            <ModeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="#" className="block px-2 py-2 hover:bg-muted rounded-md">
              {t('common.home')}
            </Link>
            <Link href="#" className="block px-2 py-2 hover:bg-muted rounded-md">
              {t('common.services')}
            </Link>
            <Link href="#" className="block px-2 py-2 hover:bg-muted rounded-md">
              {t('common.legal')}
            </Link>
            <Link href="#" className="block px-2 py-2 hover:bg-muted rounded-md">
              {t('common.about')}
            </Link>
            <div className="px-2 py-2">
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
