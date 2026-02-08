import { FAQItem } from "@/sections/FAQ/components/FAQItem";

export const FAQAccordion = () => {
  return (
    <div className="box-border caret-transparent w-full">
      <FAQItem
        question="Do you charge hourly or on spec?"
        answer="I typically work on a flat-rate or per-project basis to keep things transparent and simple for both sides. This means you’ll know exactly what you’re paying for upfront. For larger or ongoing work, I’m also open to discussing flexible pricing models."
      />
      <FAQItem
        question="How long have you been doing design?"
        answer="I’ve been designing professionally for several years, working with clients across different industries. It’s a craft I’ve refined with both passion and experience."
      />
      <FAQItem
        question="Can you do a couple of designs to see if I like what you do?"
        answer="I don’t offer free trial designs, but you can review my past work to get a strong sense of my style and quality. I’m happy to walk you through my process too."
      />
      <FAQItem
        question="What is the process and how long does it take?"
        answer="I start with a discovery call or brief to understand your needs. From concept to final delivery, it usually takes 1–3 weeks depending on the project’s scope."
      />
    </div>
  );
};
