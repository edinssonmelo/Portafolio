import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { NavActions } from "@/sections/Header/components/NavActions";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocale } from '@/hooks/useLocale';

const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLocale();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href.startsWith('/')) {
      navigate(href);
      onClick();
      return;
    }

    const sectionId = href.replace(/^\.\/#/, '').replace(/^#/, '');

    // Si estamos en otra página, navegar primero a home
    if (location.pathname !== `/${lang}`) {
      navigate(`/${lang}#${sectionId}`, { replace: false });
    } else {
      // Si ya estamos en home, hacer scroll directamente
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 84;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      window.history.pushState(null, '', `#${sectionId}`);
    }
    onClick();
  };

  return (
    <div className="opacity-100">
      <div className="opacity-100">
        <div className="flex justify-center opacity-100">
          <p className="text-white text-[21px] font-bold leading-[21px] font-['Cabinet_Grotesk',_sans-serif]">
            <a
              href={href}
              onClick={handleClick}
              className="text-white no-underline"
            >
              {text}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const { t } = useTranslation('common');
  const { to } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Close menu when clicking nav links
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="relative w-full bg-stone-900 opacity-100 md:h-[84px] md:px-[30px]"
      style={{
        borderBottom: '2px solid rgb(29, 29, 29)',
        borderLeft: '0px',
        borderRight: '0px',
        borderTop: '0px',
        borderStyle: 'solid'
      }}
    >
      <div className="relative max-w-[1140px] mx-auto opacity-100">
        <div className="opacity-100">
          {/* Top bar with logo and hamburger */}
          <div className="flex items-center justify-between px-3 py-2.5 opacity-100 md:h-[84px] md:px-0 md:py-0">
            {/* Logo */}
            <div className="opacity-100">
              <Logo />
            </div>

            {/* Hamburger button - mobile only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden opacity-100"
              aria-label="Toggle menu"
            >
              <div
                className="flex items-center justify-center rounded-[10px] opacity-100"
                style={{ borderRadius: '10px' }}
              >
                <div
                  className="bg-white rounded-[10px] opacity-100 relative w-10 h-10 flex flex-col items-center justify-center gap-1"
                  style={{
                    border: '2px solid rgb(29, 29, 29)',
                    borderRadius: '10px'
                  }}
                >
                  <div
                    className={`bg-stone-900 rounded-[3px] w-5 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
                      }`}
                    style={{
                      borderRadius: '3px',
                      transformOrigin: '50% 50% 0px',
                      willChange: 'transform'
                    }}
                  ></div>
                  <div
                    className={`bg-stone-900 rounded-[3px] w-5 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                      }`}
                    style={{
                      borderRadius: '3px',
                      transformOrigin: '50% 50% 0px',
                      willChange: 'transform'
                    }}
                  ></div>
                </div>
              </div>
            </button>

            {/* Desktop Navigation - hidden on mobile */}
            <DesktopNav className="hidden md:flex" />

            {/* Desktop Social Icons + language switcher - hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              <NavActions />
              <LanguageSwitcher dark />
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <nav
            className={`md:hidden bg-stone-900 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-[600px]' : 'opacity-0 max-h-0'
              }`}
            style={{
              borderLeft: '2px solid rgb(29, 29, 29)',
              borderRight: '2px solid rgb(29, 29, 29)',
              borderBottom: '2px solid rgb(29, 29, 29)',
              borderTop: '0px',
              borderStyle: 'solid',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              willChange: 'transform',
              overflow: 'hidden'
            }}
          >
            <div className="flex flex-col gap-4 px-4 pt-2 pb-4">
              {/* Mobile Nav Links */}
              <MobileNavLink href="#home" text={t('nav.home')} onClick={handleNavClick} />
              <MobileNavLink href="#services" text={t('nav.services')} onClick={handleNavClick} />
              <MobileNavLink href={to('/about')} text={t('nav.about')} onClick={handleNavClick} />
              <MobileNavLink href="#portfolio" text={t('nav.portfolio')} onClick={handleNavClick} />
              <MobileNavLink href={to('/blog')} text={t('nav.blog')} onClick={handleNavClick} />
              <MobileNavLink href="#contact" text={t('nav.contact')} onClick={handleNavClick} />

              {/* Mobile language switcher */}
              <div className="mt-2 flex justify-center opacity-100">
                <LanguageSwitcher dark />
              </div>

              {/* Mobile Social Icons */}
              <div className="mt-2 opacity-100">
                <NavActions className="flex justify-center gap-3" />
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white pointer-events-none transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-0'
          }`}
        style={{ willChange: 'transform' }}
      ></div>
    </header>
  );
};
