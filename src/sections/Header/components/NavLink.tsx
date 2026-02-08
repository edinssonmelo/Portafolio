import { useNavigate, useLocation } from "react-router-dom";
import { NAV_ACTIVE_COLOR, NAV_HOVER_COLOR } from "@/config/colors";

export type NavLinkProps = {
  href: string;
  text: string;
  isActive?: boolean;
};

export const NavLink = (props: NavLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = props.href.replace(/^\.\/#/, '').replace(/^#/, '');

    // Si estamos en otra página, navegar primero a home
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`, { replace: false });
    } else {
      // Si ya estamos en home, hacer scroll directamente
      scrollToSection(sectionId);
      // Actualizar el hash en la URL sin hacer scroll adicional
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Altura del header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <p
            className={`text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-[19px] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-[19px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-cabinet_grotesk ${props.isActive ? "" : "md:text-white"}`}
            style={props.isActive ? { color: NAV_ACTIVE_COLOR } : {}}
          >
            <a
              href={`#${props.href.replace(/^\.\/#/, '').replace(/^#/, '')}`}
              onClick={handleClick}
              className={`box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] cursor-pointer md:transition-colors`}
              onMouseEnter={(e) => {
                if (!props.isActive) {
                  e.currentTarget.style.color = NAV_HOVER_COLOR;
                }
              }}
              onMouseLeave={(e) => {
                if (!props.isActive) {
                  e.currentTarget.style.color = '';
                }
              }}
            >
              {props.text}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
