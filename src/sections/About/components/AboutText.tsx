export const AboutText = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-min justify-center gap-y-[15px] w-full overflow-hidden">
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full z-[1]">
        <h2 className="text-stone-900 text-4xl font-bold box-border caret-transparent tracking-[-0.36px] leading-[42px] break-words text-left font-cabinet_grotesk md:text-[44px] md:tracking-[-0.44px] md:leading-[50px]">
          Biography
        </h2>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-center gap-y-[25px] w-full overflow-hidden">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words font-dm_sans">
            Software Engineer with over 8 years of experience, focused on
            solving real business needs. Specialized in enterprise product
            development, combining{" "}
            <span className="whitespace-nowrap">technical judgment</span> and{" "}
            <span className="whitespace-nowrap">product vision</span>.
          </p>
          <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] break-words font-dm_sans mt-4">
            I apply AI assisted and agentic engineering to accelerate delivery,
            explore and validate ideas, automate workflows, and multiply
            execution. Proactive by nature, I take ownership early and drive
            work from concept to real impact.
          </p>
        </div>
      </div>
    </div>
  );
};
