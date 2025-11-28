export const AboutText = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full overflow-hidden">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
        <h2 className="text-stone-900 text-4xl font-bold box-border caret-transparent tracking-[-0.36px] leading-[42px] break-words text-left font-cabinet_grotesk md:text-[44px] md:tracking-[-0.44px] md:leading-[50px]">
          Biography
        </h2>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-full overflow-hidden">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
          <p className="text-stone-900 text-[22px] box-border caret-transparent leading-[34px] break-words font-dm_sans md:text-2xl md:leading-9">
            I’m a Fullstack Engineer based in Colombia.{" "}
            <br className="text-[22px] box-border caret-transparent leading-[34px] break-words md:text-2xl md:leading-9" />
            I love building systems that hack the system.
          </p>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words font-dm_sans">
            My journey in this dynamic and ever-evolving field has been a
            testament to my passion for crafting meaningful user experiences,
            leveraging technologies, and fearlessly pushing the boundaries of
            digital creativity. I thrive on transforming ideas into intuitive
            and impactful designs.
          </p>
        </div>
      </div>
    </div>
  );
};
