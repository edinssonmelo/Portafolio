import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "@/sections/Header/components/NavLink";

export const DesktopNav = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();

  useEffect(() => {
    // Si hay un hash en la URL, usarlo como sección activa inicial
    if (location.hash) {
      const hashSection = location.hash.replace('#', '');
      setActiveSection(hashSection);
    }

    const sections = ['home', 'services', 'about', 'portfolio', 'contact'];

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

  return (
    <nav className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[35px] md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[35px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <NavLink href="#home" text="Home" isActive={activeSection === 'home'} />
      <NavLink href="#services" text="Services" isActive={activeSection === 'services'} />
      <NavLink href="#about" text="About" isActive={activeSection === 'about'} />
      <NavLink href="#portfolio" text="Portfolio" isActive={activeSection === 'portfolio'} />
      <NavLink href="#contact" text="Contact" isActive={activeSection === 'contact'} />
    </nav>
  );
};
