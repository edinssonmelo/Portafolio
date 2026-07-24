import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { isMobileScreenshot } from "@/config/screenshotMeta";

const PREVIEW_WORD_COUNT = 14;
const HOVER_CYCLE_MS = 900;

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
  galleryImages?: readonly string[];
  imageSizes?: string;
  imageVariant?: string;
  imageAspect?: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  enableHoverGallery?: boolean;
};

export const PortfolioCard = (props: PortfolioCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const routePath = props.href.startsWith("./")
    ? props.href.replace("./", "/")
    : props.href.startsWith("/")
      ? props.href
      : `/${props.href}`;

  const { preview, canExpand } = getPreviewText(props.description);

  const images = useMemo(() => {
    const gallery = props.galleryImages?.length
      ? [...props.galleryImages]
      : [props.imageUrl];
    return gallery;
  }, [props.galleryImages, props.imageUrl]);

  const canCycle = props.enableHoverGallery !== false && images.length > 1;

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (!isHovering || !canCycle) return;

    const timer = window.setInterval(() => {
      setImageIndex((current) => {
        const next = (current + 1) % images.length;
        return next === 0 ? 1 : next;
      });
    }, HOVER_CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [isHovering, canCycle, images.length]);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(routePath);
  };

  const handleMouseEnter = () => {
    if (!canCycle) return;
    setIsHovering(true);
    setImageIndex(1);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setImageIndex(0);
  };

  return (
    <article className="relative z-10 flex h-full w-full flex-col gap-4 md:gap-5">
      <div
        role="button"
        tabIndex={0}
        onClick={handleImageClick}
        onKeyDown={(e) => e.key === "Enter" && navigate(routePath)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex aspect-[16/9] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[20px] border-2 border-teal-300 bg-neutral-100"
      >
        {images.map((src, index) => {
          const shotIsMobile = isMobileScreenshot(src);
          const isActive = index === imageIndex;

          return (
            <img
              key={src}
              sizes={props.imageSizes}
              src={src}
              alt={`${props.title}${index === 0 ? "" : ` - ${index + 1}`}`}
              loading={index === 0 ? "lazy" : "eager"}
              decoding="async"
              aria-hidden={!isActive}
              className={`absolute inset-0 m-auto transition-opacity duration-300 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              } ${
                shotIsMobile
                  ? "h-full w-auto max-w-[32%] object-contain object-center sm:max-w-[28%] md:max-w-[24%]"
                  : "h-full w-full object-contain object-top p-1 md:p-2"
              }`}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex w-full flex-col gap-3 md:gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-dm_sans text-xl font-bold leading-snug text-stone-900 md:text-2xl">
            <Link to={routePath} className={portfolioLinkClassName}>
              {props.title}
            </Link>
          </h3>
          <p className="font-dm_sans text-base leading-relaxed text-stone-900 md:text-lg">
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
