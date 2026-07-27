import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = ({ dark = false }: { dark?: boolean }) => {
    const { t, i18n } = useTranslation('common');
    const { lang, switchPath } = useLocale();
    const location = useLocation();
    const navigate = useNavigate();

    const target = lang === 'es' ? 'en' : 'es';
    const label = lang === 'es' ? t('langSwitch.toEnglish') : t('langSwitch.toSpanish');

    const handleClick = () => {
        void i18n.changeLanguage(target);
        navigate(switchPath(location.pathname, target), { replace: true });
    };

    const base =
        'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors';
    const theme = dark
        ? 'border-white/60 text-white hover:border-white hover:bg-white/10'
        : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white';

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={t('langSwitch.label')}
            className={`${base} ${theme}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {label}
        </button>
    );
};
