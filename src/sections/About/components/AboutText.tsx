export const AboutText = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full overflow-hidden">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
        <h2 className="text-stone-900 text-4xl font-bold box-border caret-transparent tracking-[-0.36px] leading-[42px] break-words text-left font-cabinet_grotesk md:text-[44px] md:tracking-[-0.44px] md:leading-[50px]">
          Biography
        </h2>
      </div>
      {/* RESTAURADO DESDE ESTÁTICOS: bio */}
      <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-full overflow-hidden">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words font-dm_sans">
            Edinsson Adrian Melo Calvo is a Full-Stack Engineer specializing in software product development for different platforms, with extensive experience in e-commerce, fintech, SaaS, and AI solutions. He currently focuses his work on supporting entrepreneurs, business owners, and anyone who wants to build digital products and make a living from this wonderful profession.
          </p>
        </div>
      </div>
    </div>
  );
};
