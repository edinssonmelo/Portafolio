import { versionedSrc } from '@/config/publicAssets';

type CredentialBadgeProps = {
    title: string;
    subtitle: string;
    detail?: string;
    imageSrc: string;
    href?: string;
    onOpen?: () => void;
};

const wrapperClass =
    'group flex w-[248px] shrink-0 flex-col items-center text-center transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2';

const badgeContent = (title: string, subtitle: string, detail: string | undefined, imageSrc: string) => (
    <>
        <div className="mb-4 flex h-[156px] w-full items-center justify-center rounded-[18px] bg-white/80 px-3 py-2 shadow-[0_8px_24px_rgba(28,25,23,0.08)]">
            <img
                src={versionedSrc(imageSrc)}
                alt=""
                decoding="async"
                className="max-h-[140px] max-w-full object-contain"
            />
        </div>

        <div className="flex w-full flex-col gap-1 px-1">
            <h3 className="line-clamp-2 min-h-[2.5rem] font-cabinet_grotesk text-sm font-bold leading-snug text-stone-900 md:text-[15px]">
                {title}
            </h3>
            <p className="line-clamp-2 min-h-[2.25rem] font-dm_sans text-xs leading-snug text-stone-600 md:text-sm">
                {subtitle}
            </p>
            {detail ? (
                <p className="font-dm_sans text-xs font-semibold text-stone-900 md:text-sm">{detail}</p>
            ) : (
                <span className="block min-h-[1.125rem]" aria-hidden />
            )}
        </div>
    </>
);

export const CredentialBadge = ({
    title,
    subtitle,
    detail,
    imageSrc,
    href,
    onOpen,
}: CredentialBadgeProps) => {
    const content = badgeContent(title, subtitle, detail, imageSrc);

    if (onOpen) {
        return (
            <button type="button" onClick={onOpen} aria-label={title} className={wrapperClass}>
                {content}
            </button>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            className={wrapperClass}
        >
            {content}
        </a>
    );
};
