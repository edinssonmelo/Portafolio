import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "@/sections/Header/components/NavLink";

export const DesktopNav = ({ className = "" }: { className?: string }) => {
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
    <nav className={`flex items-center justify-center gap-[35px] ${className}`}>
      <NavLink href="#home" text="Home" isActive={activeSection === 'home'} />
      <NavLink href="#services" text="Services" isActive={activeSection === 'services'} />
      <NavLink href="#about" text="About" isActive={activeSection === 'about'} />
      <NavLink href="#portfolio" text="Portfolio" isActive={activeSection === 'portfolio'} />
      <NavLink href="#contact" text="Contact" isActive={activeSection === 'contact'} />
    </nav>
  );
};
