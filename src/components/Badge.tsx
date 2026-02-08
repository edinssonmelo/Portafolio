export const Badge = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 z-[1]">
      <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-1 flex h-min justify-center gap-y-1 w-min overflow-hidden px-[15px] py-[5px] rounded-[20px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-stone-900 after:rounded-[20px] after:border-separate after:border-2 after:border-solid after:left-0 after:top-0 after:font-sans_serif">
        <div className="relative box-border caret-transparent shrink-0 h-3 w-[11px]">
          <div className="box-border caret-transparent h-full w-full">
            <img
              src="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-stone-900 text-[13px] font-black box-border caret-transparent tracking-[0.65px] leading-[23px] uppercase text-nowrap font-dm_sans">
            Hello!
          </p>
        </div>
      </div>
    </div>
  );
};
