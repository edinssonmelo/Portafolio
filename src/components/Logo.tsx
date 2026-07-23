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
      className="relative h-[55px] w-[110px] cursor-pointer md:h-[57px] md:w-[150px]"
    >
      <img
        src="/assets/logo.png"
        alt="Edinsson Melo"
        width={500}
        height={500}
        decoding="async"
        className="block h-full w-full object-cover object-center"
      />
    </div>
  );
};
