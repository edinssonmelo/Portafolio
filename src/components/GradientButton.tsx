import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type GradientButtonProps = {
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export const GradientButton = ({
  href,
  to,
  children,
  className = "",
  external = false,
  type = "button",
  disabled,
  onClick,
}: GradientButtonProps) => {
  const faceClassName =
    "relative z-10 flex shrink-0 items-center justify-center gap-2 whitespace-nowrap bg-white px-[30px] py-[18px] rounded-[10px] after:pointer-events-none after:absolute after:inset-0 after:rounded-[10px] after:border-2 after:border-stone-900 after:border-solid disabled:opacity-60";

  const shadowClassName =
    "pointer-events-none absolute left-0 top-1.5 h-full w-full rounded-[10px] bg-[conic-gradient(rgb(126,230,216)_0deg,rgb(220,255,49)_360deg)] after:absolute after:inset-0 after:rounded-[10px] after:border-2 after:border-stone-900 after:border-solid";

  const wrapperClassName = `relative inline-flex w-min shrink-0 flex-col ${className}`;

  if (to) {
    return (
      <div className={wrapperClassName}>
        <Link to={to} className={faceClassName}>
          {children}
        </Link>
        <div className={shadowClassName} aria-hidden />
      </div>
    );
  }

  if (href) {
    return (
      <div className={wrapperClassName}>
        <a
          href={href}
          className={faceClassName}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
        <div className={shadowClassName} aria-hidden />
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={faceClassName}
      >
        {children}
      </button>
      <div className={shadowClassName} aria-hidden />
    </div>
  );
};
