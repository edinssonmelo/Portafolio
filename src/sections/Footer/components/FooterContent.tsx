import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";
import { FooterContact } from "@/sections/Footer/components/FooterContact";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from '@/hooks/useLocale';

export const FooterContent = () => {
  const { t } = useTranslation('common');
  const { to } = useLocale();

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Top section: Contact and Social */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
        <FooterContact />
        <div className="flex flex-col items-start gap-3 md:items-end">
          <FooterSocial />
          <LanguageSwitcher />
        </div>
      </div>

      {/* Bottom section: Copyright */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-4 border-t border-black/10">
        <p className="text-black text-sm md:text-stone-900 md:text-base font-dm_sans">
          {t('footer.copyright')}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={to('/about')}
            className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans hover:underline"
          >
            {t('nav.about')}
          </Link>
          <span className="text-black text-sm md:text-stone-900 hidden md:inline">•</span>
          <Link
            to={to('/blog')}
            className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans hover:underline"
          >
            Blog
          </Link>
          <span className="text-black text-sm md:text-stone-900 hidden md:inline">•</span>
          <a
            href="https://buymeacoffee.com/edinssonmelo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans hover:underline"
          >
            {t('footer.buyMeACoffee')}
          </a>
        </div>
      </div>
    </div>
  );
};
