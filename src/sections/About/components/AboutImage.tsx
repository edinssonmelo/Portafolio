export const AboutImage = () => {
  return (
    <div className="relative mx-auto aspect-square w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-stone-900">
        <div className="absolute inset-0 rounded-full">
          <img
            sizes="(max-width: 768px) 260px, 380px"
            src="https://c.animaapp.com/mih2ldgveCT36V/assets/20.png"
            alt="Edinsson Melo - Fullstack Developer based in Colombia"
            className="h-full w-full rounded-full object-cover md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};
