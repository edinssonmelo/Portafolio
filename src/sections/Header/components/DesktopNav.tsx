import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { NavLink } from "@/sections/Header/components/NavLink";
import { useLocale } from '@/hooks/useLocale';

export const DesktopNav = ({ className = "" }: { className?: string }) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();
  const { t } = useTranslation('common');
  const { to } = useLocale();

  useEffect(() => {
    // Si hay un hash en la URL, usarlo como sección activa inicial
    if (location.hash) {
      const hashSection = location.hash.replace('#', '');
      setActiveSection(hashSection);
    }

    const sections = ['home', 'services', 'portfolio', 'contact'];

    // Función para detectar qué sección está visible
    const handleScroll = () => {
      const headerOffset = 150;
      let currentSection = 'home';

      // Encontrar la sección que está más cerca del top del viewport (considerando el header)
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la sección está pasando el punto de referencia (headerOffset)
          if (rect.top <= headerOffset) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Escuchar eventos de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Llamar una vez al cargar

    // También escuchar cambios en el hash de la URL
    const handleHashChange = () => {
      if (location.hash) {
        const hashSection = location.hash.replace('#', '');
        setActiveSection(hashSection);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  const isAboutActive = location.pathname === to('/about');
  const isBlogActive =
    location.pathname === to('/blog') || location.pathname.startsWith(`${to('/blog')}/`);

  return (
    <nav className={`flex items-center justify-center gap-[35px] ${className}`}>
      <NavLink href="#home" text={t('nav.home')} isActive={activeSection === 'home'} />
      <NavLink href="#services" text={t('nav.services')} isActive={activeSection === 'services'} />
      <NavLink href={to('/about')} text={t('nav.about')} isActive={isAboutActive} />
      <NavLink href="#portfolio" text={t('nav.portfolio')} isActive={activeSection === 'portfolio'} />
      <NavLink href={to('/blog')} text={t('nav.blog')} isActive={isBlogActive} />
      <NavLink href="#contact" text={t('nav.contact')} isActive={activeSection === 'contact'} />
    </nav>
  );
};
