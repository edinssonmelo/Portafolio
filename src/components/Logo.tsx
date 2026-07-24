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
      className="relative flex shrink-0 cursor-pointer items-center bg-transparent"
    >
      <img
        src="/assets/logo-mobile.png"
        alt="Edinsson Melo"
        width={1254}
        height={1254}
        decoding="async"
        draggable={false}
        className="block h-10 w-10 bg-transparent object-contain object-center md:hidden"
      />
      <img
        src="/assets/logo-full.png"
        alt="Edinsson Melo"
        width={1672}
        height={941}
        decoding="async"
        draggable={false}
        className="hidden h-[58px] w-auto bg-transparent object-contain object-left md:block md:h-[68px] lg:h-[76px]"
        style={{ maxWidth: "min(320px, 48vw)" }}
      />
    </div>
  );
};
