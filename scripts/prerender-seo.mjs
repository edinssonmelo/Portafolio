/**
 * Post-build: inject route-specific <title>, meta, canonical, and hreflang into
 * static HTML shells so crawlers see correct SEO without executing React.
 *
 * nginx try_files serves dist/{path}/index.html before the SPA fallback.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const siteUrl = 'https://edinssonmelo.com';
const langs = ['en', 'es'];

const ROUTE_KEYS = {
  '': 'home',
  '/about': 'about',
  '/blog': 'blog',
  '/projects': 'projects',
  '/cotizacion/sistema-barber': 'cotizacion-sistema-barber',
  '/planes': 'planes',
};

const PROJECT_SLUGS = [
  'declaramelo',
  'openwhispr',
  'bernal-tech-b2b',
  'wordjet-ai',
  'superapp-mobile',
  'overup',
];

const PROJECT_SCREENSHOTS = {
  declaramelo: `${siteUrl}/screenshots/declaramelo-hero.png`,
  openwhispr: `${siteUrl}/screenshots/openwhispr-hero.png`,
  'bernal-tech-b2b': `${siteUrl}/screenshots/bernal-dashboard.png`,
  'wordjet-ai': `${siteUrl}/screenshots/wordjet-landing.png`,
  'superapp-mobile': `${siteUrl}/screenshots/sura-explora.png`,
  overup: `${siteUrl}/screenshots/overup-hero.png`,
};

const BLOG_POSTS = [
  {
    slug: 'como-conseguir-tu-primer-empleo-en-software-sin-experiencia',
    title: {
      en: 'How I got my first software job with no experience',
      es: '¿Cómo conseguí mi primer empleo en software sin experiencia?',
    },
    description: {
      en: 'I went from having no work experience to my first professional opportunity. Practical advice you can apply today: projects, fundamentals, honesty, and how to prepare for the current market.',
      es: 'Pasé de no tener experiencia laboral a mi primera oportunidad profesional. Consejos prácticos que puedes aplicar hoy: proyectos, fundamentos, sinceridad y cómo prepararte para el mercado actual.',
    },
  },
  {
    slug: 'de-verdad-necesitas-pagar-veinte-suscripciones-para-lanzar-una-app',
    title: {
      en: 'How I build my apps for free, the simple way',
      es: 'Cómo construyo mis apps gratis y de manera simple',
    },
    description: {
      en: 'My process for creating and shipping software products fast, professionally, and practically for free.',
      es: 'Mi proceso para crear y publicar productos de software rápido, de forma profesional y prácticamente gratis.',
    },
  },
];

const seoByLang = Object.fromEntries(
  langs.map((lang) => [
    lang,
    JSON.parse(readFileSync(join(root, 'src/i18n/locales', lang, 'seo.json'), 'utf8')),
  ]),
);

const OG_LOCALE = { en: 'en_US', es: 'es_CO' };
const DEFAULT_IMAGE = `${siteUrl}/assets/logo-full.png`;

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function resolveSeo(lang, subpath) {
  const seo = seoByLang[lang];

  const projectMatch = subpath.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const slug = projectMatch[1];
    const project = seo.projectSeo?.[slug];
    if (project) {
      return {
        title: project.title,
        description: project.description,
        image: PROJECT_SCREENSHOTS[slug] ?? DEFAULT_IMAGE,
        type: 'website',
      };
    }
  }

  const blogMatch = subpath.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = BLOG_POSTS.find((entry) => entry.slug === blogMatch[1]);
    if (post) {
      return {
        title: `${post.title[lang]} | Edinsson Melo`,
        description: post.description[lang],
        image: DEFAULT_IMAGE,
        type: 'article',
      };
    }
  }

  const routeKey = ROUTE_KEYS[subpath] ?? 'home';
  const route = seo.routes[routeKey];
  return {
    title: route.title,
    description: route.description,
    image: DEFAULT_IMAGE,
    type: 'website',
  };
}

function buildHreflang(subpath) {
  const paths = langs.map((lang) => {
    const url = `${siteUrl}/${lang}${subpath}`;
    return `  <link rel="alternate" hreflang="${lang}" href="${url}" />`;
  });
  const xDefault = `${siteUrl}/en${subpath}`;
  paths.push(`  <link rel="alternate" hreflang="x-default" href="${xDefault}" />`);
  return paths.join('\n');
}

function injectMeta(baseHtml, { lang, subpath }) {
  const seo = resolveSeo(lang, subpath);
  const canonical = `${siteUrl}/${lang}${subpath}`;
  const otherLang = lang === 'es' ? 'en' : 'es';
  const hreflang = buildHreflang(subpath);
  const keywords = seoByLang[lang].site.keywords;

  let html = baseHtml.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);

  html = html.replace(
    /<meta name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
  );

  html = html.replace(
    /<meta name="keywords"\s+content="[^"]*"\s*\/?>/,
    `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />\n${hreflang}`,
  );

  html = html.replace(
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${seo.type}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
  );
  html = html.replace(
    /<meta property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
  );
  html = html.replace(
    /<meta property="og:locale" content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}" />\n  <meta property="og:locale:alternate" content="${OG_LOCALE[otherLang]}" />\n  <meta property="og:image" content="${seo.image}" />`,
  );

  if (!html.includes('name="twitter:card"')) {
    const twitterBlock = `
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${canonical}" />
  <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
  <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
  <meta name="twitter:image" content="${seo.image}" />`;
    html = html.replace('</head>', `${twitterBlock}\n</head>`);
  }

  return html;
}

function writeRouteHtml(subpath, lang, baseHtml) {
  const html = injectMeta(baseHtml, { lang, subpath });
  const segments = subpath.split('/').filter(Boolean);
  const outDir = join(distDir, lang, ...segments);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
}

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
const routes = new Set(['']);

for (const subpath of Object.keys(ROUTE_KEYS)) {
  routes.add(subpath);
}
for (const slug of PROJECT_SLUGS) {
  routes.add(`/projects/${slug}`);
}
for (const post of BLOG_POSTS) {
  routes.add(`/blog/${post.slug}`);
}

let count = 0;
for (const subpath of routes) {
  for (const lang of langs) {
    writeRouteHtml(subpath, lang, baseHtml);
    count += 1;
  }
}

console.log(`prerender-seo: wrote ${count} route shells (${routes.size} paths × ${langs.length} locales)`);
