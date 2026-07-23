import { useRef, useState, useEffect } from "react";
import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";

const CAROUSEL_BTN_CLASS =
  "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-none bg-yellow-300 cursor-pointer md:h-[50px] md:w-[50px]";

export const TestimonialCarousel = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);
  const testimonials = [
    {
      name: "Testimonial 1",
      quote:
        '"The experience was incredible and very kind. I will keep hiring him."',
      authorName: "William L.",
      authorTitle: "Digital Learning Facilitator",
    },
    {
      name: "Testimonial 2",
      quote:
        '"Great work! He was attentive throughout the entire process and resolved all the questions we had both during and after the project."',
      authorName: "Umberto S.",
      authorTitle: "Computer Science Student",
    },
    {
      name: "Testimonial 3",
      quote:
        '"Excellent work with Edinsson. Always very cordial and transparent with the progress."',
      authorName: "David J.",
      authorTitle: "Marketing Specialist",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const items = carouselRef.current.children;
      if (items[index]) {
        const item = items[index] as HTMLElement;
        const scrollLeft = item.offsetLeft - carouselRef.current.offsetLeft;
        carouselRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
        setCurrentIndex(index);
        currentIndexRef.current = index;
      }
    }
  };

  const handlePrevious = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    scrollToIndex(newIndex);
    startAutoScroll();
  };

  const handleNext = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    const newIndex =
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
    startAutoScroll();
  };

  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(() => {
      const currentIdx = currentIndexRef.current;
      const newIndex =
        currentIdx < testimonials.length - 1 ? currentIdx + 1 : 0;
      scrollToIndex(newIndex);
    }, 3000);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const items = Array.from(carousel.children) as HTMLElement[];
      if (items.length === 0) return;

      const carouselRect = carousel.getBoundingClientRect();
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const carouselCenter = carouselRect.left + carouselRect.width / 2;
        const distance = Math.abs(itemCenter - carouselCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
      currentIndexRef.current = closestIndex;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
        startAutoScroll();
      }, 1000);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [testimonials.length]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative flex w-full flex-col gap-4 px-4 py-8 md:gap-0 md:px-12 md:py-20 lg:px-[120px]"
      aria-roledescription="carousel"
    >
      <ul
        ref={carouselRef}
        data-show-scrollbar="false"
        className="framer--carousel relative flex w-full list-none items-stretch overflow-x-auto overflow-y-hidden snap-x snap-mandatory md:px-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            aria-label={`${index + 1} of ${testimonials.length}`}
            aria-hidden={index !== currentIndex}
            className="box-border shrink-0 snap-center snap-always w-full min-w-full px-2 md:px-14"
          >
            <TestimonialCard
              name={testimonial.name}
              quote={testimonial.quote}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
              starIconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-17.svg"
              emptyStarIconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-18.svg"
            />
          </li>
        ))}
      </ul>

      {/* Mobile: controls below content */}
      <div
        className="flex items-center justify-center gap-6 md:hidden"
        aria-label="Carousel pagination controls"
      >
        <button
          type="button"
          aria-label="Previous"
          onClick={handlePrevious}
          className={CAROUSEL_BTN_CLASS}
        >
          <img
            alt=""
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/3.avif"
            className="h-full w-full"
          />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={handleNext}
          className={CAROUSEL_BTN_CLASS}
        >
          <img
            alt=""
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/4.avif"
            className="h-full w-full"
          />
        </button>
      </div>

      {/* Desktop: side overlay controls */}
      <fieldset
        aria-label="Carousel pagination controls"
        className="pointer-events-none absolute inset-0 hidden items-center justify-between border-0 p-[30px] md:flex"
      >
        <button
          type="button"
          aria-label="Previous"
          onClick={handlePrevious}
          className={`${CAROUSEL_BTN_CLASS} pointer-events-auto`}
        >
          <img
            alt=""
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/3.avif"
            className="h-full w-full"
          />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={handleNext}
          className={`${CAROUSEL_BTN_CLASS} pointer-events-auto`}
        >
          <img
            alt=""
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/4.avif"
            className="h-full w-full"
          />
        </button>
      </fieldset>

      <style>{`
        .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
          width: 0;
          height: 0;
        }
        .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
          display: none;
        }
      `}</style>
    </section>
  );
};
