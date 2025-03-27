'use client';

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{t('common.language')}:</span>
      <div className="flex gap-1">
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('en')}
        >
          {t('common.english')}
        </Button>
        <Button
          variant={language === 'ta' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('ta')}
        >
          {t('common.tamil')}
        </Button>
      </div>
    </div>
  );
}
