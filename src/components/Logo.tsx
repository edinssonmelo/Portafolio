import { useNavigate, useLocation } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Si estamos en otra página, navegar a home
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // Si ya estamos en home, hacer scroll al inicio
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto cursor-pointer md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[57px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[188px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    >
      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
        <img
          src="https://c.animaapp.com/mih2ldgveCT36V/assets/8.png"
          alt="EdinssonMelo"
          className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_500_/_500] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        />
      </div>
    </div>
  );
};
