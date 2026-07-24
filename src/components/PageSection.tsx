import type { ReactNode } from 'react';
import { layoutClasses } from '@/config/designTokens';

type PageSectionProps = {
    children: ReactNode;
    width?: 'default' | 'wide';
    className?: string;
    innerClassName?: string;
};

export const PageSection = ({
    children,
    width = 'default',
    className = '',
    innerClassName = '',
}: PageSectionProps) => (
    <section className={`${layoutClasses.pageSection} ${className}`}>
        <div
            className={`${
                width === 'wide'
                    ? layoutClasses.pageSectionWide
                    : layoutClasses.pageSectionInner
            } ${innerClassName}`}
        >
            {children}
        </div>
    </section>
);
