import { SectionBadge } from "@/components/SectionBadge";
import { SurfaceCard } from "@/components/SurfaceCard";
import { TagChip } from "@/components/TagChip";

type CaseStudySection = {
    title: string;
    content?: string;
    items?: string[];
};

type CaseStudySectionsProps = {
    sections: CaseStudySection[];
};

const SECTION_LABELS: Record<string, string> = {
    Problem: 'Problem',
    'My role': 'My role',
    'Technical decisions': 'Technical decisions',
    Stack: 'Stack',
    Outcome: 'Outcome',
    'What I learned': 'What I learned',
};

const isOutcome = (title: string) => title === 'Outcome';
const isStack = (title: string) => title === 'Stack';
const isPairable = (title: string) =>
    title === 'My role' || title === 'Technical decisions';

export const CaseStudySections = ({ sections }: CaseStudySectionsProps) => {
    const visibleSections = sections.filter(
        (section) =>
            (section.content && section.content.trim().length > 0) ||
            (section.items && section.items.length > 0)
    );

    if (visibleSections.length === 0) return null;

    const problem = visibleSections.find((s) => s.title === 'Problem');
    const pairSections = visibleSections.filter((s) => isPairable(s.title));
    const stack = visibleSections.find((s) => isStack(s.title));
    const outcome = visibleSections.find((s) => isOutcome(s.title));
    const learned = visibleSections.find((s) => s.title === 'What I learned');
    const rest = visibleSections.filter(
        (s) =>
            s !== problem &&
            !pairSections.includes(s) &&
            s !== stack &&
            s !== outcome &&
            s !== learned
    );

    const renderBody = (section: CaseStudySection) => (
        <>
            <p className="text-[13px] font-black uppercase tracking-[0.65px] text-stone-900 font-dm_sans">
                {SECTION_LABELS[section.title] ?? section.title}
            </p>
            {section.content ? (
                <p className="text-base leading-relaxed text-stone-900 font-dm_sans md:text-lg md:leading-[28px]">
                    {section.content}
                </p>
            ) : null}
            {section.items && section.items.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                        <li key={item}>
                            <TagChip label={item} />
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );

    return (
        <section className="bg-neutral-100 px-[30px] py-12 md:py-16">
            <div className="mx-auto max-w-[800px]">
                <SurfaceCard className="overflow-hidden p-6 md:p-8">
                    <div className="mb-6 flex flex-col gap-3 border-b border-stone-900/10 pb-6">
                        <SectionBadge label="Case study" />
                    </div>

                    {problem ? (
                        <div className="space-y-2 border-b border-stone-900/10 pb-6">
                            {renderBody(problem)}
                        </div>
                    ) : null}

                    {pairSections.length > 0 ? (
                        <div className="grid gap-6 border-b border-stone-900/10 py-6 md:grid-cols-2 md:gap-8">
                            {pairSections.map((section) => (
                                <div key={section.title} className="space-y-2">
                                    {renderBody(section)}
                                </div>
                            ))}
                        </div>
                    ) : null}

                    {stack ? (
                        <div className="space-y-2 border-b border-stone-900/10 py-6">
                            {renderBody(stack)}
                        </div>
                    ) : null}

                    {outcome ? (
                        <div className="space-y-2 border-l-4 border-brand-lime bg-brand-mint/10 px-4 py-4 md:px-5">
                            <p className="text-[13px] font-black uppercase tracking-[0.65px] text-stone-900 font-dm_sans">
                                Outcome
                            </p>
                            <p className="text-base leading-relaxed text-stone-900 font-dm_sans md:text-lg">
                                {outcome.content}
                            </p>
                        </div>
                    ) : null}

                    {learned ? (
                        <div className="mt-6 space-y-2">{renderBody(learned)}</div>
                    ) : null}

                    {rest.map((section) => (
                        <div
                            key={section.title}
                            className="mt-6 space-y-2 border-t border-stone-900/10 pt-6"
                        >
                            {renderBody(section)}
                        </div>
                    ))}
                </SurfaceCard>
            </div>
        </section>
    );
};
