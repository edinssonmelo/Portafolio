import { useTranslation } from 'react-i18next';
import type { AppLanguage } from '@/i18n';

export function useLocale(): {
    lang: AppLanguage;
    /** Prefix any internal route with the active locale, e.g. to(`/projects/foo`). */
    to: (path: string) => string;
    /** Given a full pathname (with or without locale prefix), return the same route in the other language. */
    switchPath: (pathname: string, target: AppLanguage) => string;
} {
    const { i18n } = useTranslation();
    const lang = (i18n.resolvedLanguage || i18n.language || 'en') as AppLanguage;

    const to = (path: string): string => {
        const clean = path.startsWith('/') ? path : `/${path}`;
        return `/${lang}${clean}`;
    };

    const switchPath = (pathname: string, target: AppLanguage): string => {
        const segments = pathname.split('/').filter(Boolean);
        if (segments[0] === 'es' || segments[0] === 'en') {
            segments[0] = target;
        } else {
            segments.unshift(target);
        }
        return `/${segments.join('/')}`;
    };

    return { lang, to, switchPath };
}
