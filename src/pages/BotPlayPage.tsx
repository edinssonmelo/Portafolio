import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { PageHeader } from '@/components/PageHeader';
import { PageSection } from '@/components/PageSection';
import { ProjectImageLightbox } from '@/components/ProjectImageLightbox';
import { TagChip } from '@/components/TagChip';
import { screenshotSrc } from '@/config/screenshotMeta';
import { useLocale } from '@/hooks/useLocale';

const images = ['01-monitor', '02-betplay', '03-pinnacle', '04-validation'].map(name => `/screenshots/botplay-${name}.png`);

export const BotPlayPage = () => {
  const { t } = useTranslation('projects');
  const { to } = useLocale();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-100 font-dm_sans text-stone-900">
      <Header />
      <main>
        <PageHeader badge={t('botplay.badge')} title="BotPlay Radar" description={t('botplay.subtitle')}
          backLink={<Link className="text-sm underline underline-offset-4" to={to('/projects')}>{t('detail.backToProjects')}</Link>}
          footer={<div className="flex flex-wrap justify-center gap-2">{['BetPlay (Kambi)', 'Pinnacle (Arcadia)', 'Python', 'FastAPI', 'REST API', 'SSE'].map(tag => <TagChip key={tag} label={tag} />)}</div>}
        />
        <PageSection width="wide" innerClassName="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-cabinet_grotesk text-2xl font-bold">{t('botplay.walkthrough')}</h2>
            <button type="button" onClick={() => setPlaying(!playing)} aria-pressed={playing} className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-semibold hover:bg-stone-100">{t(playing ? 'botplay.pause' : 'botplay.play')}</button>
          </div>
          <img className="block h-auto w-full rounded-xl border border-stone-200" src={screenshotSrc(playing ? '/screenshots/botplay-walkthrough.gif' : images[0])} alt={t('botplay.walkthroughAlt')} width={1265} height={712} />
          <p className="text-sm leading-relaxed text-stone-600">{t('botplay.captureNote')}</p>
          <p className="max-w-3xl text-base leading-relaxed">{t('botplay.overview')}</p>
        </PageSection>
        {images.map((image, index) => <PageSection width="wide" key={image} innerClassName="space-y-5">
          <div className="max-w-3xl"><p className="mb-2 text-sm font-semibold text-stone-500">0{index + 1}</p><h2 className="mb-3 font-cabinet_grotesk text-2xl font-bold md:text-3xl">{t(`botplay.screens.${index}.title`)}</h2><p className="text-base leading-relaxed text-stone-700">{t(`botplay.screens.${index}.body`)}</p></div>
          <button type="button" className="block w-full cursor-zoom-in rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500" onClick={() => setLightbox(index)} aria-label={t('detail.tapToView.single')}><img className="block h-auto w-full rounded-xl border border-stone-200" src={screenshotSrc(image)} width={1265} height={712} alt={t(`botplay.screens.${index}.title`)} loading="lazy" /></button>
        </PageSection>)}
        <PageSection innerClassName="space-y-6">
          <h2 className="font-cabinet_grotesk text-2xl font-bold md:text-3xl">{t('botplay.relevanceTitle')}</h2>
          <p className="text-base leading-relaxed text-stone-700">{t('botplay.relevance')}</p>
          <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-stone-700">{[0,1,2].map(i => <li key={i}>{t(`botplay.experience.${i}`)}</li>)}</ul>
          <p className="border-l-2 border-teal-400 pl-5 text-sm leading-relaxed text-stone-600">{t('botplay.scope')}</p>
          <Link className="inline-block font-semibold underline underline-offset-4" to={to('/projects')}>{t('detail.backToProjects')}</Link>
        </PageSection>
      </main>
      <Footer />
      {lightbox !== null && <ProjectImageLightbox images={images} initialIndex={lightbox} title="BotPlay Radar" onClose={() => setLightbox(null)} />}
    </div>
  );
};
