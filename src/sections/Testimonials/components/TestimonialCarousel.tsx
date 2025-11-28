import { useRef, useState, useEffect } from "react";
import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";

export const TestimonialCarousel = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);
  const testimonials = [
    {
      name: "Testimonial 1",
      quote: '"The experience was incredible and very kind. I will keep hiring him."',
      authorName: "William L.",
      authorTitle: "Digital Learning Facilitator",
    },
    {
      name: "Testimonial 2",
      quote: '"Great work! He was attentive throughout the entire process and resolved all the questions we had both during and after the project."',
      authorName: "Umberto S.",
      authorTitle: "Computer Science Student",
    },
    {
      name: "Testimonial 3",
      quote: '"Excellent work with Edinsson. Always very cordial and transparent with the progress."',
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
    // Reset auto-scroll when user interacts
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    scrollToIndex(newIndex);
    // Restart auto-scroll after user interaction
    startAutoScroll();
  };

  const handleNext = () => {
    // Reset auto-scroll when user interacts
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
    // Restart auto-scroll after user interaction
    startAutoScroll();
  };

  const startAutoScroll = () => {
    // Clear any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    // Start new interval
    autoScrollIntervalRef.current = setInterval(() => {
      const currentIdx = currentIndexRef.current;
      const newIndex = currentIdx < testimonials.length - 1 ? currentIdx + 1 : 0;
      scrollToIndex(newIndex);
    }, 5000); // 5 seconds
  };

  // Update current index when scroll happens (for manual scrolling)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const items = Array.from(carousel.children) as HTMLElement[];
      if (items.length === 0) return;

      // Find which item is most visible
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

      // Reset auto-scroll when user manually scrolls
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        // Restart auto-scroll after user stops scrolling
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
        startAutoScroll();
      }, 1000); // Wait 1 second after scroll stops
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [testimonials.length]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    startAutoScroll();

    // Cleanup on unmount
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []); // Only run once on mount

  return (
    <section
      className="static box-content caret-black block h-auto w-auto p-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-[120px] md:py-20 md:scroll-m-0 md:scroll-p-[auto]"
      aria-roledescription="carousel"
    >
      <ul
        ref={carouselRef}
        data-show-scrollbar="false"
        className="framer--carousel static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 h-auto list-disc min-h-0 min-w-0 overflow-x-visible overflow-y-visible gap-y-[normal] w-auto pl-10 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[100px] md:flex md:basis-full md:grow md:h-full md:list-none md:min-h-[auto] md:min-w-[auto] md:overflow-x-auto md:overflow-y-hidden md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[100px] md:snap-x md:snap-mandatory md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]"
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
            className="box-content caret-black shrink min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-center md:snap-always md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            style={{
              width: "calc(100% - 100px + 100px)",
            }}
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

        @media (pointer: fine) {
          .framer--carousel[data-show-scrollbar="false"] {
            scrollbar-width: none;
            scrollbar-height: none;
          }
        }
      `}</style>
      <fieldset
        aria-label="Carousel pagination controls"
        className="static [align-items:normal] box-content caret-black block justify-normal pointer-events-auto inset-auto md:absolute md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-between md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-[30px] md:scroll-m-0 md:scroll-p-[auto] md:inset-0 md:border-0"
      >
        <button
          type="button"
          aria-label="Previous"
          onClick={handlePrevious}
          className="[align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal min-h-0 min-w-0 pointer-events-auto text-center w-auto rounded-none cursor-pointer md:content-center md:items-center md:aspect-auto md:bg-yellow-300 md:caret-transparent md:block md:h-[50px] md:justify-center md:justify-items-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-none"
        >
          <img
            alt=""
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/3.avif"
            className="box-content caret-black block h-auto align-middle w-auto md:aspect-[auto_50_/_50] md:box-border md:caret-transparent md:inline md:h-[50px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[50px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={handleNext}
          className="[align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal min-h-0 min-w-0 pointer-events-auto text-center w-auto rounded-none cursor-pointer md:content-center md:items-center md:aspect-auto md:bg-yellow-300 md:caret-transparent md:block md:h-[50px] md:justify-center md:justify-items-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-none"
        >
          <img
            alt=""
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/4.avif"
            className="box-content caret-black block h-auto align-middle w-auto md:aspect-[auto_50_/_50] md:box-border md:caret-transparent md:inline md:h-[50px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[50px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </button>
      </fieldset>
      <div className="box-content caret-black min-h-0 min-w-0 md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
    </section>
  );
};
