import type { BlogBlock } from '@/data/blog';
import { typographyClasses } from '@/config/designTokens';

type BlogBodyProps = {
    blocks: BlogBlock[];
};

export const BlogBody = ({ blocks }: BlogBodyProps) => {
    return (
        <div className="mx-auto max-w-[720px] space-y-6">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case 'h2':
                        return (
                            <h2
                                key={index}
                                className="font-cabinet_grotesk text-2xl font-bold tracking-tight text-stone-900 md:text-3xl md:leading-tight"
                            >
                                {block.text}
                            </h2>
                        );
                    case 'h3':
                        return (
                            <h3
                                key={index}
                                className="font-cabinet_grotesk text-xl font-bold tracking-tight text-stone-900 md:text-2xl"
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
                                className="border-l-4 border-brand-lime bg-brand-mint/10 px-5 py-4"
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
