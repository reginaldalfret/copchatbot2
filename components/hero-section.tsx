'use client';

import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-police-50 to-background dark:from-police-950/50 dark:to-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
              <span className="flex h-2 w-2 rounded-full bg-emergency-500 mr-2"></span>
              <span>{t('features.24/7')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('hero.title')}
            </h1>

            <p className="text-lg text-muted-foreground">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-police-600 hover:bg-police-700">
                {t('hero.startChat')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Phone className="mr-2 h-4 w-4 text-emergency-500 group-hover:animate-pulse" />
                {t('header.emergency')}: 112
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-police-500 to-blue-600 opacity-30 blur-xl"></div>
            <div className="relative bg-card rounded-xl shadow-xl overflow-hidden border">
              <div className="p-4 bg-police-600 text-white flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <h3 className="font-medium">{t('header.title')}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">How can I file a police complaint?</p>
                </div>
                <div className="bg-police-100 dark:bg-police-900/30 p-3 rounded-lg">
                  <p className="text-sm">
                    To file a police complaint, visit your nearest police station and approach the duty officer. Explain
                    your situation clearly, and the officer will record your statement in the Station House Diary...
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">What documents do I need?</p>
                </div>
                <div className="bg-police-100 dark:bg-police-900/30 p-3 rounded-lg">
                  <p className="text-sm">
                    You'll need to bring your ID proof (Aadhaar, Voter ID, etc.), any evidence related to your
                    complaint, and contact information...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
