import { useNavigate, useLocation } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative -ml-0.5 flex shrink-0 cursor-pointer items-center bg-transparent md:-ml-1"
    >
      <img
        src="/assets/logo-mobile.png"
        alt="Edinsson Melo"
        width={1254}
        height={1254}
        decoding="async"
        draggable={false}
        className="block h-12 w-12 bg-transparent object-contain object-left sm:h-14 sm:w-14 md:hidden"
      />
      <img
        src="/assets/logo-full.png"
        alt="Edinsson Melo"
        width={1672}
        height={941}
        decoding="async"
        draggable={false}
        className="hidden h-[72px] w-auto bg-transparent object-contain object-left md:block md:h-[82px] lg:h-[90px]"
        style={{ maxWidth: "min(380px, 52vw)" }}
      />
    </div>
  );
};
