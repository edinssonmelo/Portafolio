export type FAQItemProps = {
  question: string;
  answer: string;
  iconUrl?: string;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div className="box-border caret-transparent border-stone-900 overflow-hidden border-b-2 border-solid">
      <div className="items-center bg-transparent box-border caret-transparent flex justify-between py-[26px]">
        <div className="items-center box-border caret-transparent flex">
          <span className="text-stone-900 text-xl font-bold box-border caret-transparent block tracking-[-0.1px] leading-[26px] text-left font-cabinet_grotesk">
            {props.question}
          </span>
        </div>
        <img
          src={
            props.iconUrl ||
            "https://c.animaapp.com/mih2ldgveCT36V/assets/LLNGTQJwvYCj5LIs9LlGQGZwWQ.svg"
          }
          alt="icon"
          className="box-border caret-transparent h-[22px] w-[22px] ml-[22px]"
        />
      </div>
      <div className="box-border caret-transparent h-0 overflow-hidden">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent flex pb-[26px]">
            <p className="text-stone-900 text-lg box-border caret-transparent leading-[30px] text-left font-dm_sans">
              {props.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
