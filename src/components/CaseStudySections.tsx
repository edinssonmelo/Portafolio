type CaseStudySection = {
    title: string;
    content?: string;
    items?: string[];
};

type CaseStudySectionsProps = {
    sections: CaseStudySection[];
};

export const CaseStudySections = ({ sections }: CaseStudySectionsProps) => {
    const visibleSections = sections.filter(
        (section) =>
            (section.content && section.content.trim().length > 0) ||
            (section.items && section.items.length > 0)
    );

    if (visibleSections.length === 0) return null;

    return (
        <section className="bg-white px-[30px] py-[80px] md:py-[100px]">
            <div className="mx-auto flex max-w-[800px] flex-col gap-10">
                {visibleSections.map((section) => (
                    <div key={section.title} className="space-y-3">
                        <h2 className="font-cabinet_grotesk text-2xl font-bold text-stone-900 md:text-3xl">
                            {section.title}
                        </h2>
                        {section.content ? (
                            <p className="text-lg leading-[30px] text-stone-900">
                                {section.content}
                            </p>
                        ) : null}
                        {section.items && section.items.length > 0 ? (
                            <ul className="flex flex-wrap gap-2">
                                {section.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-full border-2 border-stone-900 bg-neutral-100 px-4 py-1 text-sm font-semibold text-stone-900"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
};
