import type { BlogBlock } from '@/data/blog';
import { typographyClasses } from '@/config/designTokens';

type BlogBodyProps = {
    blocks: BlogBlock[];
};

export const BlogBody = ({ blocks }: BlogBodyProps) => {
    let h2Index = 0;

    return (
        <div className="space-y-5">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case 'h2': {
                        h2Index += 1;
                        const isFirstSection = h2Index === 1;
                        return (
                            <h2
                                key={index}
                                className={`font-cabinet_grotesk text-[1.65rem] font-bold leading-snug tracking-tight text-stone-900 md:text-[1.85rem] ${
                                    isFirstSection
                                        ? 'mt-4'
                                        : 'mt-12 border-t border-stone-200 pt-10'
                                }`}
                            >
                                {block.text}
                            </h2>
                        );
                    }
                    case 'h3':
                        return (
                            <h3
                                key={index}
                                className="mt-6 font-cabinet_grotesk text-xl font-bold leading-snug tracking-tight text-stone-900"
                            >
                                {block.text}
                            </h3>
                        );
                    case 'p':
                        return (
                            <p
                                key={index}
                                className={`${typographyClasses.body} text-stone-800`}
                            >
                                {block.text}
                            </p>
                        );
                    case 'ul':
                        return (
                            <ul
                                key={index}
                                className={`${typographyClasses.body} list-disc space-y-2 pl-6 text-stone-800`}
                            >
                                {block.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        );
                    case 'ol':
                        return (
                            <ol
                                key={index}
                                className={`${typographyClasses.body} list-decimal space-y-2 pl-6 text-stone-800`}
                            >
                                {block.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        );
                    case 'callout':
                        return (
                            <blockquote
                                key={index}
                                className="my-6 rounded-[12px] border-2 border-stone-900 bg-neutral-50 px-5 py-4"
                            >
                                <p className="font-dm_sans text-base font-semibold leading-relaxed text-stone-900 md:text-lg">
                                    {block.text}
                                </p>
                            </blockquote>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};
