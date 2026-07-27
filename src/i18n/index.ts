import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from '@/i18n/locales/en/common.json';
import heroEn from '@/i18n/locales/en/hero.json';
import servicesEn from '@/i18n/locales/en/services.json';
import portfolioEn from '@/i18n/locales/en/portfolio.json';
import projectsEn from '@/i18n/locales/en/projects.json';
import testimonialsEn from '@/i18n/locales/en/testimonials.json';
import statsEn from '@/i18n/locales/en/stats.json';
import contactEn from '@/i18n/locales/en/contact.json';
import aboutEn from '@/i18n/locales/en/about.json';
import seoEn from '@/i18n/locales/en/seo.json';
import errorsEn from '@/i18n/locales/en/errors.json';
import planesEn from '@/i18n/locales/en/planes.json';
import cotizacionEn from '@/i18n/locales/en/cotizacion.json';
import blogEn from '@/i18n/locales/en/blog.json';

import commonEs from '@/i18n/locales/es/common.json';
import heroEs from '@/i18n/locales/es/hero.json';
import servicesEs from '@/i18n/locales/es/services.json';
import portfolioEs from '@/i18n/locales/es/portfolio.json';
import projectsEs from '@/i18n/locales/es/projects.json';
import testimonialsEs from '@/i18n/locales/es/testimonials.json';
import statsEs from '@/i18n/locales/es/stats.json';
import contactEs from '@/i18n/locales/es/contact.json';
import aboutEs from '@/i18n/locales/es/about.json';
import seoEs from '@/i18n/locales/es/seo.json';
import errorsEs from '@/i18n/locales/es/errors.json';
import planesEs from '@/i18n/locales/es/planes.json';
import cotizacionEs from '@/i18n/locales/es/cotizacion.json';
import blogEs from '@/i18n/locales/es/blog.json';

export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;
export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: AppLanguage = 'en';

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: commonEn,
                hero: heroEn,
                services: servicesEn,
                portfolio: portfolioEn,
                projects: projectsEn,
                testimonials: testimonialsEn,
                stats: statsEn,
                contact: contactEn,
                about: aboutEn,
                seo: seoEn,
                errors: errorsEn,
                planes: planesEn,
                cotizacion: cotizacionEn,
                blog: blogEn,
            },
            es: {
                common: commonEs,
                hero: heroEs,
                services: servicesEs,
                portfolio: portfolioEs,
                projects: projectsEs,
                testimonials: testimonialsEs,
                stats: statsEs,
                contact: contactEs,
                about: aboutEs,
                seo: seoEs,
                errors: errorsEs,
                planes: planesEs,
                cotizacion: cotizacionEs,
                blog: blogEs,
            },
        },
        supportedLngs: SUPPORTED_LANGUAGES,
        nonExplicitSupportedLngs: true,
        load: 'languageOnly',
        fallbackLng: DEFAULT_LANGUAGE,
        defaultNS: 'common',
        interpolation: { escapeValue: false },
        returnEmptyString: false,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
        },
    });

export default i18n;
