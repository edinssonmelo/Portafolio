export const AboutImage = () => {
  return (
    <div className="relative aspect-square w-full max-w-[280px] mx-auto md:contents">
      <div className="relative aspect-square w-full rounded-full border-2 border-stone-900 overflow-hidden md:absolute md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:w-[432px] md:rounded-[50%] md:left-[48%] md:top-[51%] md:max-w-none md:mx-0 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-stone-900 after:md:rounded-[50%] after:md:border-separate after:md:border-2 after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
        <div className="absolute inset-0 rounded-full md:rounded-[50%]">
          <img
            sizes="(max-width: 768px) 280px, 432px"
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/20.png"
            alt="Edinsson Melo - Fullstack Developer based in Colombia"
            className="h-full w-full object-cover rounded-full md:object-contain md:rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
};
