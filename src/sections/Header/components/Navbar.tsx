import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { NavActions } from "@/sections/Header/components/NavActions";
import { useNavigate, useLocation } from "react-router-dom";

const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.replace(/^\.\/#/, '').replace(/^#/, '');

    // Si estamos en otra página, navegar primero a home
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`, { replace: false });
    } else {
      // Si ya estamos en home, hacer scroll directamente
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
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
      className="relative bg-stone-900 w-full opacity-100 md:h-[100px] md:px-[30px]"
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
          <div className="flex items-center justify-between px-4 py-3 md:px-0 md:py-0 md:h-[100px] opacity-100">
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

            {/* Desktop Social Icons - hidden on mobile */}
            <NavActions className="hidden md:flex" />
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
              <MobileNavLink href="#home" text="Home" onClick={handleNavClick} />
              <MobileNavLink href="#services" text="Services" onClick={handleNavClick} />
              <MobileNavLink href="#about" text="About" onClick={handleNavClick} />
              <MobileNavLink href="#portfolio" text="Portfolio" onClick={handleNavClick} />
              <MobileNavLink href="#contact" text="Contact" onClick={handleNavClick} />

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
