import { SectionBadge } from "@/components/SectionBadge";
import { TagChip } from "@/components/TagChip";
import { typographyClasses } from "@/config/designTokens";

export type ProjectStoryData = {
    hook: string;
    body: string[];
    stack: string[];
    pullQuote?: string;
};

type ProjectStoryProps = {
    story: ProjectStoryData;
};

export const ProjectStory = ({ story }: ProjectStoryProps) => {
    const paragraphs = story.body.filter((p) => p.trim().length > 0);

    if (paragraphs.length === 0 && story.stack.length === 0) return null;

    return (
        <section className="bg-neutral-100 px-[30px] py-12 md:py-16">
            <article className="mx-auto max-w-[720px]">
                <SectionBadge label="About this project" />

                <h2
                    className={`${typographyClasses.sectionTitle} mt-6 max-w-[640px] text-balance`}
                >
                    {story.hook}
                </h2>

                <div className="mt-8 space-y-6 border-l-2 border-stone-900/15 pl-5 md:pl-6">
                    {paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`${typographyClasses.body} text-stone-800 first:text-stone-900`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {story.pullQuote ? (
                    <blockquote className="mt-8 border-l-4 border-brand-lime bg-brand-mint/10 px-5 py-4">
                        <p className="font-dm_sans text-base italic leading-relaxed text-stone-900 md:text-lg">
                            &ldquo;{story.pullQuote}&rdquo;
                        </p>
                    </blockquote>
                ) : null}

                {story.stack.length > 0 ? (
                    <div className="mt-10 flex flex-col gap-3 border-t border-stone-900/10 pt-8">
                        <p className="text-[13px] font-black uppercase tracking-[0.65px] text-stone-900 font-dm_sans">
                            Built with
                        </p>
                        <ul className="flex flex-wrap gap-2">
                            {story.stack.map((item) => (
                                <li key={item}>
                                    <TagChip label={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </article>
        </section>
    );
};
