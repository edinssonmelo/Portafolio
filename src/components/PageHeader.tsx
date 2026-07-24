import type { ReactNode } from 'react';
import { SectionBadge } from '@/components/SectionBadge';
import { layoutClasses } from '@/config/designTokens';

type PageHeaderProps = {
    badge: string;
    title: string;
    description?: string;
    kicker?: string;
    align?: 'center' | 'left';
    iconUrl?: string;
    backLink?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
};

export const PageHeader = ({
    badge,
    title,
    description,
    kicker,
    align = 'center',
    iconUrl,
    backLink,
    children,
    footer,
}: PageHeaderProps) => {
    const isCenter = align === 'center';

    return (
        <header className={layoutClasses.pageHeader}>
            <div
                className={`${layoutClasses.pageHeaderInner} ${
                    isCenter ? 'items-center text-center' : 'items-start text-left'
                }`}
            >
                {backLink}
                <SectionBadge label={badge} iconUrl={iconUrl} />
                {children}
                <h1
                    className={`text-balance font-cabinet_grotesk text-3xl font-bold tracking-tight text-stone-900 md:text-5xl md:leading-tight ${
                        !isCenter ? 'max-w-[720px]' : ''
                    }`}
                >
                    {title}
                </h1>
                {kicker ? (
                    <p className="font-dm_sans text-xl font-semibold text-stone-900 md:text-2xl">
                        {kicker}
                    </p>
                ) : null}
                {description ? (
                    <p className="max-w-[640px] font-dm_sans text-base leading-relaxed text-stone-700 md:text-lg">
                        {description}
                    </p>
                ) : null}
                {footer}
            </div>
        </header>
    );
};
