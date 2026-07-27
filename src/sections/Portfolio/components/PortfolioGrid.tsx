import { useTranslation } from 'react-i18next';
import { PortfolioCard } from "@/sections/Portfolio/components/PortfolioCard";
import { useLocale } from '@/hooks/useLocale';

type PortfolioGridProps = {
  limit?: number;
  enableHoverGallery?: boolean;
};

export const PortfolioGrid = ({
  limit,
  enableHoverGallery = false,
}: PortfolioGridProps) => {
  const { t } = useTranslation('portfolio');
  const { to } = useLocale();

  const PORTFOLIO_PROJECTS = [
    {
      href: to('/projects/declaramelo'),
      imageUrl: "/screenshots/declaramelo-hero.png",
      galleryImages: [
        "/screenshots/declaramelo-hero.png",
        "/screenshots/declaramelo-features.png",
        "/screenshots/declaramelo-process.png",
      ],
      imageSizes: "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
      imageVariant: "",
      title: t('projects.declaramelo.title'),
      description: t('projects.declaramelo.description'),
    },
    {
      href: to('/projects/openwhispr'),
      imageUrl: "/screenshots/openwhispr-hero.png",
      galleryImages: [
        "/screenshots/openwhispr-hero.png",
        "/screenshots/openwhispr-meetings.png",
        "/screenshots/openwhispr-transcription.png",
      ],
      imageSizes: "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
      imageVariant: "",
      title: t('projects.openwhispr.title'),
      description: t('projects.openwhispr.description'),
    },
    {
      href: to('/projects/bernal-tech-b2b'),
      imageUrl: "/screenshots/bernal-dashboard.png",
      galleryImages: [
        "/screenshots/bernal-dashboard.png",
        "/screenshots/bernal-login.png",
        "/screenshots/bernal-catalog.png",
        "/screenshots/bernal-product.png",
      ],
      imageSizes: "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
      imageVariant: "",
      title: t('projects.bernal-tech-b2b.title'),
      description: t('projects.bernal-tech-b2b.description'),
    },
    {
      href: to('/projects/wordjet-ai'),
      imageUrl: "/screenshots/wordjet-landing.png",
      galleryImages: [
        "/screenshots/wordjet-landing.png",
        "/screenshots/wordjet-editor.png",
      ],
      imageSizes: "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
      imageVariant: "",
      title: t('projects.wordjet-ai.title'),
      description: t('projects.wordjet-ai.description'),
    },
    {
      href: to('/projects/superapp-mobile'),
      imageUrl: "/screenshots/sura-explora.png",
      galleryImages: [
        "/screenshots/sura-explora.png",
        "/screenshots/sura-ingresa.png",
        "/screenshots/sura-resuelve.png",
        "/screenshots/sura-avanza.png",
      ],
      title: t('projects.superapp-mobile.title'),
      description: t('projects.superapp-mobile.description'),
    },
    {
      href: to('/projects/overup'),
      imageUrl: "/screenshots/overup-hero.png",
      galleryImages: [
        "/screenshots/overup-hero.png",
        "/screenshots/overup-catalog.png",
        "/screenshots/overup-product.png",
      ],
      imageSizes: "max((min(max(100vw - 60px, 1px), 1140px) - 40px) / 2, 50px)",
      imageVariant: "",
      title: t('projects.overup.title'),
      description: t('projects.overup.description'),
    },
  ];

  const projects = limit ? PORTFOLIO_PROJECTS.slice(0, limit) : PORTFOLIO_PROJECTS;

  return (
    <div className="relative z-10 grid w-full grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
      {projects.map((project) => (
        <PortfolioCard
          key={project.href}
          {...project}
          enableHoverGallery={enableHoverGallery}
        />
      ))}
    </div>
  );
};
