import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import { useTranslation } from 'react-i18next';
import { SOCIAL_ICON_BACKGROUND_COLOR } from '@/config/colors';
import type { AppLanguage } from '@/i18n';

const LANGUAGES: {
    code: AppLanguage;
    initials: string;
    labelKey: 'langSwitch.english' | 'langSwitch.spanish';
}[] = [
    { code: 'en', initials: 'EN', labelKey: 'langSwitch.english' },
    { code: 'es', initials: 'ES', labelKey: 'langSwitch.spanish' },
];

const FlagIcon = ({ code, className = '' }: { code: AppLanguage; className?: string }) => {
    if (code === 'es') {
        return (
            <svg viewBox="0 0 20 14" className={className} aria-hidden>
                <rect width="20" height="7" fill="#FCD116" />
                <rect y="7" width="20" height="3.5" fill="#003893" />
                <rect y="10.5" width="20" height="3.5" fill="#CE1126" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 20 14" className={className} aria-hidden>
            <rect width="20" height="14" fill="#B22234" />
            <rect y="2" width="20" height="2" fill="#fff" />
            <rect y="6" width="20" height="2" fill="#fff" />
            <rect y="10" width="20" height="2" fill="#fff" />
            <rect width="8" height="8" fill="#3C3B6E" />
        </svg>
    );
};

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation('common');
    const { lang, switchPath } = useLocale();
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const current = LANGUAGES.find((item) => item.code === lang) ?? LANGUAGES[0];

    useEffect(() => {
        if (!open) return;

        const handlePointerDown = (event: MouseEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);

    const handleSelect = (code: AppLanguage) => {
        if (code === lang) {
            setOpen(false);
            return;
        }

        void i18n.changeLanguage(code);
        navigate(switchPath(location.pathname, code), { replace: true });
        setOpen(false);
    };

    return (
        <div ref={rootRef} className="relative shrink-0">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-label={`${t('langSwitch.label')}: ${t(current.labelKey)}`}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="m-0 flex items-center justify-center border-0 bg-transparent p-0 outline-none transition-opacity hover:opacity-80 focus:outline-none focus-visible:opacity-80"
            >
                <FlagIcon code={current.code} className="h-[14px] w-5 rounded-[2px]" />
            </button>

            {open ? (
                <div className="absolute right-0 top-[calc(100%+8px)] z-[60]">
                    <ul
                        role="listbox"
                        aria-label={t('langSwitch.label')}
                        className="relative z-[1] min-w-[7.25rem] overflow-hidden rounded-[10px] border-2 border-stone-900 bg-white py-1"
                    >
                        {LANGUAGES.map((item) => {
                            const isActive = item.code === lang;

                            return (
                                <li key={item.code} role="option" aria-selected={isActive}>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(item.code)}
                                        className={`flex w-full items-center gap-2 px-3 py-2 text-left transition-colors ${
                                            isActive
                                                ? 'bg-[#DCFF31]/35 font-bold text-stone-900'
                                                : 'text-stone-700 hover:bg-stone-100'
                                        }`}
                                    >
                                        <FlagIcon code={item.code} className="h-[14px] w-5 shrink-0 rounded-[2px]" />
                                        <span className="font-['Cabinet_Grotesk',_sans-serif] text-sm font-bold uppercase tracking-wide">
                                            {item.initials}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div
                        className="absolute inset-0 -z-[1] translate-y-[4px] rounded-[10px] border-2 border-stone-900"
                        style={{ backgroundColor: SOCIAL_ICON_BACKGROUND_COLOR }}
                        aria-hidden
                    />
                </div>
            ) : null}
        </div>
    );
};
