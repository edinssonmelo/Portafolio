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
            Software Engineer with over 7 years of experience delivering software aligned with business needs. Specialized in Software Development Web / Mobile, with a disciplined approach to scale systems and support business growth. Currently I work as a freelance developer in software product development, web/mobile apps and automations. I am in the process of becoming a coach and mentor to share my experience and help others grow in the profession.
          </p>
        </div>
      </div>
    </div>
  );
};
