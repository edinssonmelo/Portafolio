export const HeroButton = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 z-0">
      <button className="relative content-center items-center bg-transparent caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 text-center w-min p-0">
        <a
          href="./#portfolio"
          className="relative text-blue-700 content-center items-center bg-white box-border caret-transparent gap-x-[7px] flex shrink-0 h-min justify-center gap-y-[7px] w-min z-10 px-[30px] py-[18px] rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"
        >
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-stone-900 text-lg font-semibold box-border caret-transparent tracking-[-0.72px] leading-[19px] text-left text-nowrap font-dm_sans">
              See my work
            </p>
          </div>
        </a>
        <div className="absolute bg-[conic-gradient(rgb(126,230,216)_0deg,rgb(220,255,49)_360deg)] box-border caret-transparent shrink-0 h-full w-full rounded-[10px] left-0 top-1.5 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[10px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif"></div>
      </button>
    </div>
  );
};
