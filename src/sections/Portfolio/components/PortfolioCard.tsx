import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PREVIEW_WORD_COUNT = 14;

const portfolioLinkClassName =
  "font-semibold text-stone-900 underline decoration-stone-400 underline-offset-2 transition-colors hover:decoration-stone-900";

const getPreviewText = (text: string) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= PREVIEW_WORD_COUNT) {
    return { preview: text, canExpand: false };
  }

  return {
    preview: words.slice(0, PREVIEW_WORD_COUNT).join(" "),
    canExpand: true,
  };
};

export type PortfolioCardProps = {
  href: string;
  imageUrl: string;
  imageSizes?: string;
  imageVariant?: string;
  imageAspect?: string;
  title: string;
  description: string;
};

export const PortfolioCard = (props: PortfolioCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const routePath = props.href.startsWith("./")
    ? props.href.replace("./", "/")
    : props.href.startsWith("/")
      ? props.href
      : `/${props.href}`;

  const { preview, canExpand } = getPreviewText(props.description);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(routePath);
  };

  return (
    <article className="relative z-10 flex w-full flex-col gap-5 md:gap-[30px]">
      <div
        role="button"
        tabIndex={0}
        onClick={handleImageClick}
        onKeyDown={(e) => e.key === "Enter" && navigate(routePath)}
        className={`relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[20px] border-2 border-teal-300 bg-neutral-100 ${props.imageAspect ?? "aspect-[16/9]"}`}
      >
        <img
          sizes={props.imageSizes}
          src={props.imageUrl}
          alt={`${props.title} - ${props.description}`}
          className={`h-full w-full object-contain object-center p-1 md:p-2 ${props.imageVariant ?? ""}`}
        />
      </div>

      <div className="relative z-10 flex w-full flex-col gap-4 md:gap-5">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-xl font-bold leading-snug text-stone-900 font-dm_sans md:text-2xl md:leading-[30px]">
            <Link to={routePath} className={portfolioLinkClassName}>
              {props.title}
            </Link>
          </h3>
          <p className="text-stone-900 text-base leading-relaxed font-dm_sans md:text-lg md:leading-[30px]">
            {expanded || !canExpand ? props.description : `${preview}...`}
            {canExpand ? (
              <>
                {" "}
                <button
                  type="button"
                  onClick={() => setExpanded((open) => !open)}
                  className={`ml-0.5 inline ${portfolioLinkClassName}`}
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              </>
            ) : null}
          </p>
        </div>

        <Link
          to={routePath}
          className="group inline-flex w-fit items-center gap-2 text-base tracking-[-0.36px] font-dm_sans md:text-lg"
        >
          <span className={portfolioLinkClassName}>View Case Study</span>
          <ArrowRight
            className="h-[18px] w-[18px] shrink-0 text-stone-900 transition-transform group-hover:translate-x-1"
            strokeWidth={2.25}
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
};
