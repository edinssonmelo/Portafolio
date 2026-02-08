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
      className="relative cursor-pointer opacity-100 h-[55px] w-[110px] md:h-[57px] md:w-[150px]"
    >
      <div
        data-framer-background-image-wrapper="true"
        style={{
          position: 'absolute',
          borderRadius: 'inherit',
          inset: '0px'
        }}
      >
        <img
          decoding="auto"
          width="500"
          height="500"
          src="/assets/logo.png"
          alt="EdinssonMelo"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            objectPosition: 'center center',
            objectFit: 'cover',
            aspectRatio: 'auto 500 / 500'
          }}
        />
      </div>
    </div>
  );
};
